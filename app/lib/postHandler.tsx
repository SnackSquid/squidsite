import useParams from "next/link";
import path from "path";
import fs from "fs";
import json from "@app/data/projectList.json";

export async function getStaticProps({ params }) {
  console.log(params);
  const passedData = params;
  return { props: { passedData } };
}

export async function getStaticPaths() {
  const paths = getPathValues(json);
  return {
    paths,
    fallback: false,
  };
}

export function getPostData() {
  //
}

const getPathValues = (json: Object) => {
  const values = Object.values(json);
  return values.map((value) => {
    return {
      params: {
        id: value.path,
      },
    };
  });
};
