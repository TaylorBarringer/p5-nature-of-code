## Walker Bounds & Edge Repelling

This snippet keeps a random walker within the canvas bounds by applying a repelling force when it gets close to the edges. The `edgeThreshold` controls how close the walker can approach the edge before the repelling force is applied, and the `repelFactor` determines the strength of the repelling force. The walker's position is also constrained within a buffer of `bounds` to prevent it from crossing the edges. This ensures that the walker stays within the canvas while moving.

### Code Explanation:

- **`edgeThreshold`**: Determines how close the walker can get to the edge before it starts being repelled.
- **`repelFactor`**: Controls the strength of the repelling force applied when the walker is near the edge.
- **`bounds`**: Prevents the walker from crossing the defined canvas boundaries, keeping it within a safe range.
- This example is from within a `Walker` class.

### Code Snippet:

```javascript
// set() can go inside a Walker class
step() {
  let xStep = randomGaussian(0, 3);
  let yStep = randomGaussian(0, 3);
  this.x += xStep;
  this.y += yStep;

  // If close to an edge, apply a repelling force
  let edgeThreshold = 120; // How close it gets before repelling
  let repelFactor = 0.03; // Strength of the repel force

  if (this.x < edgeThreshold)
    xStep += (edgeThreshold - this.x) * repelFactor;
  if (this.x > width - edgeThreshold)
    xStep -= (this.x - (width - edgeThreshold)) * repelFactor;
  if (this.y < edgeThreshold)
    yStep += (edgeThreshold - this.y) * repelFactor;
  if (this.y > height - edgeThreshold)
    yStep -= (this.y - (height - edgeThreshold)) * repelFactor;

  // Constrain within bounds
  this.x = max(50, min(width - 50, this.x + xStep));
  this.y = max(50, min(height - 50, this.y + yStep));
}
```
