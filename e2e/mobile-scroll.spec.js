import { test, expect } from '@playwright/test'

test.use({
  viewport: { width: 390, height: 844 }, // iPhone 14 dimensions
})

test('body scroll is restored after navigating from offcanvas menu', async ({ page }) => {
  await page.goto('/')

  // Open the offcanvas hamburger menu
  const toggler = page.locator('.navbar-toggler')
  await expect(toggler).toBeVisible()
  await toggler.click()

  // Wait for offcanvas to be fully open
  const offcanvas = page.locator('#offcanvasNavbar')
  await expect(offcanvas).toHaveClass(/show/)

  // Confirm Bootstrap locked body scroll
  const overflowBefore = await page.evaluate(() => document.body.style.overflow)
  expect(overflowBefore).toBe('hidden')

  // Click the Schedule nav link inside the offcanvas
  await page.locator('#offcanvasNavbar').getByRole('link', { name: /schedule/i }).click()

  // Wait for route to change
  await expect(page).toHaveURL(/#\/schedule/)

  // Body overflow must be cleared — no longer 'hidden'
  const overflowAfter = await page.evaluate(() => document.body.style.overflow)
  expect(overflowAfter).not.toBe('hidden')
})

test('page content is scrollable after mobile navigation', async ({ page }) => {
  await page.goto('/')

  // Open offcanvas
  await page.locator('.navbar-toggler').click()
  await expect(page.locator('#offcanvasNavbar')).toHaveClass(/show/)

  // Navigate to Schedule
  await page.locator('#offcanvasNavbar').getByRole('link', { name: /schedule/i }).click()
  await expect(page).toHaveURL(/#\/schedule/)

  // Wait for Bootstrap offcanvas close animation to complete (~300ms)
  await expect(page.locator('#offcanvasNavbar')).not.toHaveClass(/show/, { timeout: 2000 })

  // Verify page has scrollable content
  const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight)
  const clientHeight = await page.evaluate(() => document.documentElement.clientHeight)
  expect(scrollHeight).toBeGreaterThan(clientHeight)

  // Simulate user scrolling via mouse wheel — if overflow:hidden is active, scrollY won't change
  await page.mouse.move(195, 400)
  await page.mouse.wheel(0, 500)
  await page.waitForTimeout(100)
  const scrollY = await page.evaluate(() => window.scrollY)
  expect(scrollY).toBeGreaterThan(0)
})
