import { List } from "@shared/types";
import { TagKind } from "@domain/tags";

type StaticTagsRoutes = List<TagKind>;
type IsStaticRoute = boolean;

export function isStatic(tag: TagKind): IsStaticRoute {
  const staticRoutes: StaticTagsRoutes = ["Travel"];
  return staticRoutes.includes(tag);
}