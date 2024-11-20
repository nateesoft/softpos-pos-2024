init project for softpos 2024 (pos-restaurant)

# fix bug support mysql5.0
SHOW VARIABLES LIKE 'old_passwords'

SET PASSWORD FOR 'User'@'Host'=PASSWORD('yourpassword');
FLUSH Privileges;