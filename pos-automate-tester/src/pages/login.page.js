import { removeSlashUrl } from "../utils"

export class LoginPage {
  baseUrl = "http://127.0.0.1:3000"

  locatorButtonLogin = '#id="btnLogin'
  locatorErrorMessage = `[data-test="error-message"]`

  /**
   *
   * @param {import("@playwright/test").Page} page
   */
  constructor(page) {
    this.page = page
  }

  async goto() {
    await this.page.goto(this.baseUrl)
  }

  async fillLogin(username, password) {
    await this.page.locator('input.MuiInputBase-input').nth(0).fill(username)
    await this.page.locator('input.MuiInputBase-input').nth(1).fill(password)
  }

  async clickLogin() {
    await this.page.locator('button.MuiButtonBase-root#btnLogin').nth(0).click()
  }

  async getUsername() {
    return await this.page.locator('input.MuiInputBase-input').nth(0).inputValue()
  }

  async getPassword() {
    return await this.page.locator('input.MuiInputBase-input').nth(1).inputValue()
  }

  async getErrorMessage() {
    try {
      return await this.page.locator(this.locatorErrorMessage).textContent() || ""
    } catch (e) {
      console.error(e)
    }

    return ""
  }

  isValidUrl() {
    const url = removeSlashUrl(this.page.url())
    return url === this.baseUrl
  }
}
