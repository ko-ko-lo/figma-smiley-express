/* ------------------------------------------------------------------
Smiley Express Plugin by Denise Kolodzey
Created with 🫖 and 🤍
------------------------------------------------------------------ */

figma.showUI(__html__, {
  width: 512,
  height: 724,
  title: "Smiley Express by Denise Kolodzey",
});

figma.ui.onmessage = (msg: { type: string; count: number }) => {
  if (msg.type === "create-shapes") {
    const numberOfRectangles = msg.count;

    const nodes: SceneNode[] = [];
    for (let i = 0; i < numberOfRectangles; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 150;
      rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  figma.closePlugin();
};
