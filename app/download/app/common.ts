import yaml from "js-yaml";

export const digitalOceanLink =
  "https://firecamp.ams3.digitaloceanspaces.com/electron-apps";

export const linuxLinks = {
  x64: `${digitalOceanLink}/linux/latest-linux.yml`,
  arm64: `${digitalOceanLink}/linux/latest-linux-arm64.yml`,
} as {
  [key: string]: string;
};

export const macLinks = {
  x64: `${digitalOceanLink}/mac/latest-mac.yml`,
  arm64: `${digitalOceanLink}/mac/latest-mac-arm64.yml`,
} as {
  [key: string]: string;
};

export const winLinks = {
  "64": `${digitalOceanLink}/win/latest.yml`,
} as {
  [key: string]: string;
};

export const parseYaml = (yamlString: string) => {
  return yaml.load(yamlString) as {
    version: string;
    files: {
      url: string;
      sha512: string;
      size: number;
      blockMapSize: number;
    }[];
    path: string;
    sha512: string;
    releaseDate: string;
  };
};
