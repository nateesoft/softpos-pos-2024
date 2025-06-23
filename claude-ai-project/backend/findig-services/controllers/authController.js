const User = require('../models/User');
const { generateToken, generateRefreshToken } = require('../config/jwt');
const { successResponse, errorResponse } = require('../utils/response');

class AuthController {
    static async login(req, res) {
        try {
            const { username, password } = req.body;

            // ตรวจสอบผู้ใช้
            const user = await User.findByUsername(username);
            if (!user) {
                return errorResponse(res, 'Invalid username or password', 401);
            }

            // ตรวจสอบรหัสผ่าน
            const isValidPassword = await User.validatePassword(password, user.password);
            if (!isValidPassword) {
                return errorResponse(res, 'Invalid username or password', 401);
            }

            // สร้าง JWT Tokens
            const tokenPayload = { 
                id: user.id, 
                username: user.username, 
                role: user.role 
            };
            
            const accessToken = generateToken(tokenPayload);
            const refreshToken = generateRefreshToken(tokenPayload);

            const userData = {
                id: user.id,
                username: user.username,
                email: user.email,
                full_name: user.full_name,
                role: user.role
            };

            successResponse(res, 'Login successful', { 
                user: userData, 
                access_token: accessToken,
                refresh_token: refreshToken,
                token_type: 'Bearer',
                expires_in: '24h'
            });
        } catch (error) {
            console.error('Login error:', error);
            errorResponse(res, 'Internal server error', 500);
        }
    }

    static async refreshToken(req, res) {
        try {
            const { refresh_token } = req.body;

            if (!refresh_token) {
                return errorResponse(res, 'Refresh token required', 400);
            }

            // ตรวจสอบ refresh token
            const { verifyToken } = require('../config/jwt');
            const decoded = verifyToken(refresh_token);

            // สร้าง access token ใหม่
            const tokenPayload = { 
                id: decoded.id, 
                username: decoded.username, 
                role: decoded.role 
            };
            
            const newAccessToken = generateToken(tokenPayload);

            successResponse(res, 'Token refreshed successfully', { 
                access_token: newAccessToken,
                token_type: 'Bearer',
                expires_in: '24h'
            });
        } catch (error) {
            console.error('Refresh token error:', error);
            errorResponse(res, 'Invalid refresh token', 401);
        }
    }

    static async register(req, res) {
        try {
            const { username, password, email, full_name } = req.body;

            // ตรวจสอบว่า username มีอยู่แล้วหรือไม่
            const existingUser = await User.findByUsername(username);
            if (existingUser) {
                return errorResponse(res, 'Username already exists', 400);
            }

            // สร้างผู้ใช้ใหม่
            const userId = await User.create({ username, password, email, full_name });

            successResponse(res, 'User registered successfully', { id: userId });
        } catch (error) {
            console.error('Register error:', error);
            errorResponse(res, 'Internal server error', 500);
        }
    }

    static async getProfile(req, res) {
        try {
            const user = await User.findByUsername(req.user.username);
            
            const userData = {
                id: user.id,
                username: user.username,
                email: user.email,
                full_name: user.full_name,
                role: user.role
            };

            successResponse(res, 'Profile retrieved successfully', userData);
        } catch (error) {
            console.error('Get profile error:', error);
            errorResponse(res, 'Internal server error', 500);
        }
    }

    static async logout(req, res) {
        try {
            // ในการทำงานจริง อาจต้องเก็บ blacklist ของ token ที่ logout แล้ว
            // หรือใช้ Redis เพื่อจัดการ token invalidation
            
            successResponse(res, 'Logged out successfully');
        } catch (error) {
            console.error('Logout error:', error);
            errorResponse(res, 'Internal server error', 500);
        }
    }
}

module.exports = AuthController;