import { WebPartContext } from "@microsoft/sp-webpart-base";
import { graphfi, GraphFI } from "@pnp/graph";
import "@pnp/graph/sites";

let graph: GraphFI = null;

export const getGraph = (context?: WebPartContext): GraphFI => {
    if (context !== null) {
      graph = graphfi()
        .using(graphSPFx(context));
    }
    
    return graph;
  };

function graphSPFx(context: WebPartContext): import("@pnp/core").TimelinePipe<any> {
    throw new Error("Function not implemented.");
}
