import { expect } from "@playwright/test";

import { test } from '../pages/base'
test.beforeEach(async ({ loginPage }) => {
    await loginPage.goto()
})

test('Input fields should display as the data that was filled', async ({ loginPage }) => {
    await loginPage.fillLogin('1001', '1001')

    expect(await loginPage.getUsername()).toBe('1001')
    expect(await loginPage.getPassword()).toBe('1001')
})

test.only('Test click submit login button', async ({ loginPage }) => {
    await loginPage.fillLogin('1001', '1001')
    await loginPage.clickLogin()
    loginPage.isValidUrl()
})
