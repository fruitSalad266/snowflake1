# Snowflake Generator
This is a [Figma](https://figma.com) plugin that generates snowflakes randomly in a pattern.
Snowflakes were created using Alex's [Snowflake](https://www.figma.com/community/plugin/1434601307616372925/snowflake) Figma plugin.

Options include number of snowflakes, spread between the snowflakes on both the x and y axes. Snowflakes are placed based on a custom implementation of [Perlin noise](https://en.wikipedia.org/wiki/Perlin_noise).

## Local development
Download the repo and move it to your /Figma/app-124.x.x folder.
This requires the desktop app.
You may have to setup npm on your device and download dependencies from package.json

Use ctrl+shift+b and select "watch" to run. Alternatively, use ```npm run dev --watch```
