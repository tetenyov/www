import React from "react";
import { Tags } from "@domain/tags";
import { Metadata } from "@domain/metadata";
import { TagLink } from "@components/TagLink";
import { List } from "@components/Notes/List";

type TaggedProps = {
  with: Tags;
  from: Metadata[];
};

export const Tagged: React.FC<TaggedProps> = ({ with: tag, from: notes }) => {
  const notesCount = 10;
  const forTag = notes.filter(({ tags }) => tags.includes(tag)).slice(0, notesCount);

  return (
    <>
      <h3>
        <TagLink tag={tag} />
      </h3>
      <List notes={forTag} />
    </>
  );
};
