import { WebPartContext } from "@microsoft/sp-webpart-base";
import { graphfi, GraphFI } from "@pnp/graph";

let graph: GraphFI = null;

export const getGraph = (
    context?: WebPartContext
  ): GraphFI => {
    if (context !== null) {
      //You must add the @pnp/logging package to include the PnPLogging behavior it is no longer a peer dependency
      // The LogLevel set's at what level a message will be written to the console
      graph = graphfi()
        .using(graphSPFx(context))
    }
    return graph;
  };

function graphSPFx(context: WebPartContext): import("@pnp/core").TimelinePipe<any> {
    throw new Error("Function not implemented.");
}
