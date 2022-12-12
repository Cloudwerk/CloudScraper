import { WebPartContext } from "@microsoft/sp-webpart-base";
import { graphfi, GraphFI, SPFx as graphSPFx} from "@pnp/graph";

let _graph: GraphFI = null;

export const getGraph = (
    context?: WebPartContext
  ): GraphFI => {
    if (context !== null) {
      //You must add the @pnp/logging package to include the PnPLogging behavior it is no longer a peer dependency
      // The LogLevel set's at what level a message will be written to the console
      _graph = graphfi()
        .using(graphSPFx(context));
    }
    return _graph;
  };