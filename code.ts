figma.showUI(__html__);
figma.ui.resize(500, 500);
figma.loadAllPagesAsync();

//for easy limit scale
function getRandomArbitrary(min: number, max: number) : number{
  return Math.random() * (max - min) + min;
}

figma.ui.onmessage = pluginMessage => {
  
  //fetch component set from file
  const postComponentSet = figma.root.findOne(node => node.type == "COMPONENT_SET" && node.name == "Snowflakes") as ComponentSetNode;
  
  //assign individual components
  const vDefault = postComponentSet.defaultVariant as ComponentNode;
  const v2 = postComponentSet.findOne(node => node.type == "COMPONENT" && node.name == "Property 1=b") as ComponentNode;
  const v3 = postComponentSet.findOne(node => node.type == "COMPONENT" && node.name == "Property 1=c") as ComponentNode;

  const variants = [vDefault, v2, v3];

  let start = 0 as number;
  const nodes: SceneNode[] = [];

  for(let i = 0; i < pluginMessage.n; i++) {
    //randomly select from array
    const tSnow = variants[Math.floor(Math.random() * variants.length)].createInstance();

    const scale = getRandomArbitrary(0.5, 1.5);

    tSnow.resizeWithoutConstraints(
      tSnow.width * scale,
      tSnow.height * scale
    )

    tSnow.x = tSnow.x + start + tSnow.width * 0.1;
    //use basic perlin noise
    tSnow.y = tSnow.y + Math.sin(getRandomArbitrary(-1, 1)) * 50 * pluginMessage.y;
    tSnow.rotation = getRandomArbitrary(-180, 180);

    console.log(tSnow.width);
    start += tSnow.width * 0.05 * pluginMessage.x;

    nodes.push(tSnow);
  }

  //zoom into new nodes created
  figma.viewport.scrollAndZoomIntoView(nodes);

  figma.closePlugin();
}