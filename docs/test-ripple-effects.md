# Ripple Effects Test Page

This page demonstrates the comprehensive ripple effects that have been implemented sitewide.

## Button Examples

<div style="display: flex; gap: 16px; flex-wrap: wrap; margin: 20px 0;">
  <button class="btn-primary">Primary Button</button>
  <button class="btn-secondary">Secondary Button</button>
  <button class="btn-warning">Warning Button</button>
  <button class="btn-danger">Danger Button</button>
  <button class="btn-neutral">Neutral Button</button>
</div>

## Custom Clickable Elements

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 20px 0;">
  <div class="card clickable" style="padding: 20px; border: 1px solid var(--vp-c-divider); border-radius: 8px; cursor: pointer;">
    <h3>Clickable Card</h3>
    <p>This card has ripple effects on click.</p>
  </div>
  
  <div class="feature-card" style="padding: 20px; background: var(--vp-c-bg-soft); border-radius: 8px; cursor: pointer;">
    <h3>Feature Card</h3>
    <p>Another example with ripple effects.</p>
  </div>
</div>

## Container Blocks with Ripple

::: tip Interactive Tip
Click on this tip block to see the ripple effect in action!
:::

::: warning Clickable Warning
This warning block also has ripple effects when clicked.
:::

::: danger Interactive Danger
Even danger blocks can have beautiful ripple animations.
:::

::: info Information Block
Click anywhere on this info block to trigger the ripple effect.
:::

::: details Expandable Details
Click to expand this details block - notice the ripple effect!

This content is revealed when expanded, and the ripple effect enhances the interaction.
:::

## Custom HTML Buttons

<div style="margin: 20px 0;">
  <button onclick="alert('Custom button clicked!')">Regular HTML Button</button>
  <button class="no-ripple" onclick="alert('No ripple button clicked!')">Button Without Ripple</button>
</div>

## Instructions

1. **Click any button** - You should see a circular ripple animation expand from the click point
2. **Click on cards** - The ripple effect adapts to the size of the element
3. **Click on container blocks** - Even content blocks have interactive ripple effects
4. **Navigate using sidebar** - Navigation elements also have enhanced ripple effects
5. **Try different click positions** - The ripple always starts from where you click

## Technical Details

The ripple effect system:
- **Automatically applies** to all buttons, links, and clickable elements
- **Adapts size** based on the element dimensions
- **Positions accurately** from the exact click coordinates
- **Supports both light and dark modes**
- **Prevents accumulation** by cleaning up previous ripples
- **Respects opt-out** with the `.no-ripple` class

The implementation includes:
- CSS animations with proper timing
- JavaScript event handling for precise positioning
- Integration with VitePress navigation system
- Performance optimizations for smooth animations