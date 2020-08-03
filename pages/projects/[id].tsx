import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

import { Nullable } from "@shared/types";
import { Metadata as MetadataType } from "@domain/metadata";
import { projectsMetadata, projectsNames } from "@api/fetch";

import { PostLayout } from "@layouts/Post";
import { Metadata } from "@components/Metadata";
import { Adjacent } from "@components/Adjacent";
import { Description } from "@components/Description";

type ProjectProps = {
  metadata: MetadataType;
  prevPost: Nullable<MetadataType>;
  nextPost: Nullable<MetadataType>;
};

export const getStaticProps: GetStaticProps<ProjectProps> = async (context) => {
  const { id } = context.params;
  const projects = await projectsMetadata();
  const index = projects.findIndex((project) => project.slug.includes(String(id)));

  return {
    props: {
      metadata: projects[index],
      prevPost: projects[index - 1] ?? null,
      nextPost: projects[index + 1] ?? null,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await projectsNames();
  const paths = projects.map((id) => ({ params: { id } }));
  return { paths, fallback: false };
};

const Project: React.FC<ProjectProps> = ({ metadata, prevPost, nextPost }) => {
  const { title, description } = metadata;
  const { query } = useRouter();
  const PostContents = dynamic(() => import(`./${query.id}.mdx`));

  return (
    <PostLayout>
      <Head>
        <title>{title}</title>
        <Description>{description}</Description>
      </Head>
      <main>
        <PostContents />
      </main>
      <Metadata metadata={metadata} />
      <Adjacent prev={prevPost} next={nextPost} />
    </PostLayout>
  );
};

export default Project;
