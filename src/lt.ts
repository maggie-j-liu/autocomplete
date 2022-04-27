const completionSpec: Fig.Spec = {
  name: "lt",
  description: "Expose your localhost to the world",
  subcommands: [
    {
      name: "my_subcommand",
      description: "Example subcommand",
    },
  ],
  options: [
    {
      name: ["-p", "--port"],
      description: "Internal HTTP server port",
      isRequired: true,
      args: {},
    },
    {
      name: ["-h", "--host"],
      description: "Upstream server providing forwarding",
      args: {},
    },
    {
      name: ["-s", "--subdomain"],
      description: "Request this subdomain",
      args: {},
    },
    {
      name: ["-l", "--local-host"],
      description:
        "Tunnel traffic to this host instead of localhost, override Host header to this host",
      args: {},
    },
    {
      name: "--local-https",
      description: "Tunnel traffic to a local HTTPS server",
      args: {
        isOptional: true,
        suggestions: ["true", "false"],
      },
    },
    {
      name: "--local-cert",
      description: "Path to certificate PEM file for local HTTPS server",
      args: {
        template: ["filepaths"],
      },
    },
    {
      name: "--local-key",
      description: "Path to certificate key file for local HTTPS server",
      args: {
        template: ["filepaths"],
      },
    },
    {
      name: "--local-ca",
      description:
        "Path to certificate authority file for self-signed certificates",
      args: {
        template: ["filepaths"],
      },
    },
    {
      name: "--allow-invalid-cert",
      description:
        "Disable certificate checks for your local HTTPS server (ignore cert/key/ca options)",
      args: {
        isOptional: true,
        suggestions: ["true", "false"],
      },
    },
    {
      name: ["-o", "--open"],
      description: "Opens the tunnel URL in your browser",
      args: {
        isOptional: true,
        suggestions: ["true", "false"],
      },
    },
    {
      name: "--print-requests",
      description: "Print basic request info",
      args: {
        isOptional: true,
        suggestions: ["true", "false"],
      },
    },
    {
      name: "--help",
      description: "Show help for lt",
    },
    {
      name: "--version",
      description: "Show version number",
    },
  ],
};
export default completionSpec;
