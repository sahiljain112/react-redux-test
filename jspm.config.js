SystemJS.config({
  nodeConfig: {
    "paths": {
      "npm:": "jspm_packages/npm/",
      "github:": "jspm_packages/github/",
      "react-redux-test/": "src/"
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.13",
      "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0",
      "core-js": "npm:core-js@2.4.1",
      "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.8.0",
      "babel-plugin-transform-object-assign": "npm:babel-plugin-transform-object-assign@6.8.0",
      "babel-preset-react": "npm:babel-preset-react@6.11.1",
      "babel-preset-stage-0": "npm:babel-preset-stage-0@6.5.0",
      "babel-eslint": "npm:babel-eslint@6.1.2"
    },
    "packages": {
      "npm:babel-plugin-transform-react-jsx@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.9.0",
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.13.0"
        }
      },
      "npm:babel-helper-builder-react-jsx@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-types": "npm:babel-types@6.15.0",
          "lodash": "npm:lodash@4.15.0",
          "esutils": "npm:esutils@2.0.2"
        }
      },
      "npm:babel-types@6.15.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "lodash": "npm:lodash@4.15.0",
          "esutils": "npm:esutils@2.0.2",
          "to-fast-properties": "npm:to-fast-properties@1.0.2"
        }
      },
      "npm:babel-runtime@6.11.6": {
        "map": {
          "core-js": "npm:core-js@2.4.1",
          "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
        }
      },
      "npm:babel-plugin-transform-object-rest-spread@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.13.0"
        }
      },
      "npm:babel-plugin-transform-object-assign@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6"
        }
      },
      "npm:babel-eslint@6.1.2": {
        "map": {
          "babel-traverse": "npm:babel-traverse@6.15.0",
          "lodash.pickby": "npm:lodash.pickby@4.6.0",
          "babylon": "npm:babylon@6.9.1",
          "babel-types": "npm:babel-types@6.15.0",
          "lodash.assign": "npm:lodash.assign@4.2.0"
        }
      },
      "npm:babel-traverse@6.15.0": {
        "map": {
          "babylon": "npm:babylon@6.9.1",
          "babel-types": "npm:babel-types@6.15.0",
          "babel-messages": "npm:babel-messages@6.8.0",
          "invariant": "npm:invariant@2.2.1",
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "globals": "npm:globals@8.18.0",
          "babel-code-frame": "npm:babel-code-frame@6.11.0",
          "debug": "npm:debug@2.2.0",
          "lodash": "npm:lodash@4.15.0"
        }
      },
      "npm:babel-preset-react@6.11.1": {
        "map": {
          "babel-plugin-transform-flow-strip-types": "npm:babel-plugin-transform-flow-strip-types@6.14.0",
          "babel-plugin-transform-react-jsx-self": "npm:babel-plugin-transform-react-jsx-self@6.11.0",
          "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.13.0",
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.13.0",
          "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0",
          "babel-plugin-transform-react-jsx-source": "npm:babel-plugin-transform-react-jsx-source@6.9.0",
          "babel-plugin-transform-react-display-name": "npm:babel-plugin-transform-react-display-name@6.8.0"
        }
      },
      "npm:babel-preset-stage-0@6.5.0": {
        "map": {
          "babel-preset-stage-1": "npm:babel-preset-stage-1@6.13.0",
          "babel-plugin-transform-function-bind": "npm:babel-plugin-transform-function-bind@6.8.0",
          "babel-plugin-transform-do-expressions": "npm:babel-plugin-transform-do-expressions@6.8.0"
        }
      },
      "npm:babel-plugin-transform-flow-strip-types@6.14.0": {
        "map": {
          "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.13.0",
          "babel-runtime": "npm:babel-runtime@6.11.6"
        }
      },
      "npm:babel-plugin-transform-react-jsx-self@6.11.0": {
        "map": {
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.13.0",
          "babel-runtime": "npm:babel-runtime@6.11.6"
        }
      },
      "npm:babel-plugin-transform-react-jsx-source@6.9.0": {
        "map": {
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.13.0",
          "babel-runtime": "npm:babel-runtime@6.11.6"
        }
      },
      "npm:babylon@6.9.1": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6"
        }
      },
      "npm:babel-plugin-transform-function-bind@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-plugin-syntax-function-bind": "npm:babel-plugin-syntax-function-bind@6.13.0"
        }
      },
      "npm:babel-plugin-transform-do-expressions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-plugin-syntax-do-expressions": "npm:babel-plugin-syntax-do-expressions@6.13.0"
        }
      },
      "npm:babel-plugin-transform-react-display-name@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6"
        }
      },
      "npm:babel-messages@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6"
        }
      },
      "npm:babel-code-frame@6.11.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "esutils": "npm:esutils@2.0.2",
          "chalk": "npm:chalk@1.1.3",
          "js-tokens": "npm:js-tokens@2.0.0"
        }
      },
      "npm:babel-preset-stage-1@6.13.0": {
        "map": {
          "babel-plugin-transform-class-constructor-call": "npm:babel-plugin-transform-class-constructor-call@6.8.0",
          "babel-plugin-transform-export-extensions": "npm:babel-plugin-transform-export-extensions@6.8.0",
          "babel-preset-stage-2": "npm:babel-preset-stage-2@6.13.0"
        }
      },
      "npm:babel-plugin-transform-class-constructor-call@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-plugin-syntax-class-constructor-call": "npm:babel-plugin-syntax-class-constructor-call@6.13.0",
          "babel-template": "npm:babel-template@6.15.0"
        }
      },
      "npm:babel-plugin-transform-export-extensions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-plugin-syntax-export-extensions": "npm:babel-plugin-syntax-export-extensions@6.13.0"
        }
      },
      "npm:babel-preset-stage-2@6.13.0": {
        "map": {
          "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.8.0",
          "babel-preset-stage-3": "npm:babel-preset-stage-3@6.11.0",
          "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.13.0",
          "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.11.5"
        }
      },
      "npm:babel-template@6.15.0": {
        "map": {
          "babylon": "npm:babylon@6.9.1",
          "babel-traverse": "npm:babel-traverse@6.15.0",
          "babel-types": "npm:babel-types@6.15.0",
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "lodash": "npm:lodash@4.15.0"
        }
      },
      "npm:babel-plugin-transform-decorators@6.13.0": {
        "map": {
          "babel-types": "npm:babel-types@6.15.0",
          "babel-template": "npm:babel-template@6.15.0",
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
          "babel-helper-explode-class": "npm:babel-helper-explode-class@6.8.0",
          "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0"
        }
      },
      "npm:babel-plugin-transform-class-properties@6.11.5": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.13.0",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0"
        }
      },
      "npm:babel-preset-stage-3@6.11.0": {
        "map": {
          "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.13.0",
          "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.8.0",
          "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.8.0"
        }
      },
      "npm:babel-helper-define-map@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "lodash": "npm:lodash@4.15.0",
          "babel-types": "npm:babel-types@6.15.0",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0"
        }
      },
      "npm:babel-plugin-transform-exponentiation-operator@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.15.0",
          "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.13.0"
        }
      },
      "npm:babel-helper-explode-class@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-traverse": "npm:babel-traverse@6.15.0",
          "babel-types": "npm:babel-types@6.15.0",
          "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.8.0"
        }
      },
      "npm:babel-plugin-transform-async-to-generator@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.11.2",
          "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.13.0"
        }
      },
      "npm:babel-helper-function-name@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-types": "npm:babel-types@6.15.0",
          "babel-traverse": "npm:babel-traverse@6.15.0",
          "babel-template": "npm:babel-template@6.15.0",
          "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0"
        }
      },
      "npm:babel-helper-builder-binary-assignment-operator-visitor@6.15.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-types": "npm:babel-types@6.15.0",
          "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.8.0"
        }
      },
      "npm:babel-helper-bindify-decorators@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-traverse": "npm:babel-traverse@6.15.0",
          "babel-types": "npm:babel-types@6.15.0"
        }
      },
      "npm:babel-helper-remap-async-to-generator@6.11.2": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-template": "npm:babel-template@6.15.0",
          "babel-types": "npm:babel-types@6.15.0",
          "babel-traverse": "npm:babel-traverse@6.15.0",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0"
        }
      },
      "npm:babel-helper-get-function-arity@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-types": "npm:babel-types@6.15.0"
        }
      },
      "npm:babel-helper-explode-assignable-expression@6.8.0": {
        "map": {
          "babel-traverse": "npm:babel-traverse@6.15.0",
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-types": "npm:babel-types@6.15.0"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "react-redux-test": {
      "main": "sample.js",
      "format": "esm",
      "meta": {
        "*.js": {
          "loader": "plugin-babel",
          "babelOptions": {
            "plugins": [
              "babel-plugin-transform-react-jsx",
              "babel-plugin-transform-object-rest-spread"
            ],
            "presets": [
              "react",
              "es2015",
              "stage-0"
            ]
          }
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "eslint": "npm:eslint@3.4.0",
    "eslint-plugin-react": "npm:eslint-plugin-react@6.2.0",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "immutable": "npm:immutable@3.8.1",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "react": "npm:react@15.3.1",
    "react-dom": "npm:react-dom@15.3.1",
    "react-redux": "npm:react-redux@4.4.5",
    "readline": "github:jspm/nodelibs-readline@0.2.0-alpha",
    "redux": "npm:redux@3.6.0",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "npm:react@15.3.1": {
      "map": {
        "fbjs": "npm:fbjs@0.8.4",
        "loose-envify": "npm:loose-envify@1.2.0",
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:fbjs@0.8.4": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0",
        "object-assign": "npm:object-assign@4.1.0",
        "promise": "npm:promise@7.1.1",
        "core-js": "npm:core-js@1.2.7",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.10",
        "immutable": "npm:immutable@3.8.1"
      }
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "whatwg-fetch": "npm:whatwg-fetch@1.0.0",
        "node-fetch": "npm:node-fetch@1.6.0"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.4"
      }
    },
    "npm:node-fetch@1.6.0": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "encoding": "npm:encoding@0.1.12"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.1.5"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "core-util-is": "npm:core-util-is@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "isarray": "npm:isarray@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "github:jspm/nodelibs-domain@0.2.0-alpha": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.9.1"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.5",
        "pako": "npm:pako@0.2.9"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.1"
      }
    },
    "npm:stream-http@2.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.1.5",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.2",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "bn.js": "npm:bn.js@4.11.6",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.1"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "hash.js": "npm:hash.js@1.0.3",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "asn1.js": "npm:asn1.js@4.8.0"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:asn1.js@4.8.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:react-redux@4.4.5": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
        "lodash": "npm:lodash@4.15.0",
        "invariant": "npm:invariant@2.2.1",
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "npm:redux@3.6.0": {
      "map": {
        "lodash": "npm:lodash@4.15.0",
        "loose-envify": "npm:loose-envify@1.2.0",
        "lodash-es": "npm:lodash-es@4.15.0",
        "symbol-observable": "npm:symbol-observable@1.0.2"
      }
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:eslint@3.4.0": {
      "map": {
        "concat-stream": "npm:concat-stream@1.5.2",
        "estraverse": "npm:estraverse@4.2.0",
        "escope": "npm:escope@3.6.0",
        "table": "npm:table@3.7.8",
        "file-entry-cache": "npm:file-entry-cache@2.0.0",
        "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
        "user-home": "npm:user-home@2.0.0",
        "js-yaml": "npm:js-yaml@3.6.1",
        "ignore": "npm:ignore@3.1.5",
        "imurmurhash": "npm:imurmurhash@0.1.4",
        "glob": "npm:glob@7.0.6",
        "mkdirp": "npm:mkdirp@0.5.1",
        "is-my-json-valid": "npm:is-my-json-valid@2.13.1",
        "inquirer": "npm:inquirer@0.12.0",
        "strip-json-comments": "npm:strip-json-comments@1.0.4",
        "globals": "npm:globals@9.9.0",
        "espree": "npm:espree@3.1.7",
        "levn": "npm:levn@0.3.0",
        "path-is-inside": "npm:path-is-inside@1.0.1",
        "esutils": "npm:esutils@2.0.2",
        "is-resolvable": "npm:is-resolvable@1.0.0",
        "optionator": "npm:optionator@0.8.1",
        "require-uncached": "npm:require-uncached@1.0.2",
        "pluralize": "npm:pluralize@1.2.1",
        "shelljs": "npm:shelljs@0.6.1",
        "progress": "npm:progress@1.1.8",
        "natural-compare": "npm:natural-compare@1.4.0",
        "chalk": "npm:chalk@1.1.3",
        "text-table": "npm:text-table@0.2.0",
        "strip-bom": "npm:strip-bom@3.0.0",
        "doctrine": "npm:doctrine@1.3.0",
        "lodash": "npm:lodash@4.15.0",
        "debug": "npm:debug@2.2.0"
      }
    },
    "npm:escope@3.6.0": {
      "map": {
        "estraverse": "npm:estraverse@4.2.0",
        "esrecurse": "npm:esrecurse@4.1.0",
        "es6-map": "npm:es6-map@0.1.4",
        "es6-weak-map": "npm:es6-weak-map@2.0.1"
      }
    },
    "npm:optionator@0.8.1": {
      "map": {
        "levn": "npm:levn@0.3.0",
        "type-check": "npm:type-check@0.3.2",
        "prelude-ls": "npm:prelude-ls@1.1.2",
        "wordwrap": "npm:wordwrap@1.0.0",
        "deep-is": "npm:deep-is@0.1.3",
        "fast-levenshtein": "npm:fast-levenshtein@1.1.4"
      }
    },
    "npm:table@3.7.8": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "lodash": "npm:lodash@4.15.0",
        "slice-ansi": "npm:slice-ansi@0.0.4",
        "tv4": "npm:tv4@1.2.7",
        "bluebird": "npm:bluebird@3.4.6",
        "string-width": "npm:string-width@1.0.2",
        "xregexp": "npm:xregexp@3.1.1",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:inquirer@0.12.0": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "lodash": "npm:lodash@4.15.0",
        "string-width": "npm:string-width@1.0.2",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "figures": "npm:figures@1.7.0",
        "cli-width": "npm:cli-width@2.1.0",
        "cli-cursor": "npm:cli-cursor@1.0.2",
        "readline2": "npm:readline2@1.0.1",
        "ansi-regex": "npm:ansi-regex@2.0.0",
        "ansi-escapes": "npm:ansi-escapes@1.4.0",
        "through": "npm:through@2.3.8",
        "run-async": "npm:run-async@0.1.0",
        "rx-lite": "npm:rx-lite@3.1.2"
      }
    },
    "npm:doctrine@1.3.0": {
      "map": {
        "esutils": "npm:esutils@2.0.2",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:concat-stream@1.5.2": {
      "map": {
        "readable-stream": "npm:readable-stream@2.0.6",
        "typedarray": "npm:typedarray@0.0.6",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:glob@7.0.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "fs.realpath": "npm:fs.realpath@1.0.0",
        "minimatch": "npm:minimatch@3.0.3",
        "once": "npm:once@1.4.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.0",
        "inflight": "npm:inflight@1.0.5"
      }
    },
    "npm:readable-stream@2.0.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "core-util-is": "npm:core-util-is@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7"
      }
    },
    "npm:user-home@2.0.0": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.1"
      }
    },
    "npm:esrecurse@4.1.0": {
      "map": {
        "estraverse": "npm:estraverse@4.1.1",
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:json-stable-stringify@1.0.1": {
      "map": {
        "jsonify": "npm:jsonify@0.0.0"
      }
    },
    "npm:file-entry-cache@2.0.0": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "flat-cache": "npm:flat-cache@1.2.1"
      }
    },
    "npm:string-width@1.0.2": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
        "code-point-at": "npm:code-point-at@1.0.0"
      }
    },
    "npm:js-yaml@3.6.1": {
      "map": {
        "esprima": "npm:esprima@2.7.3",
        "argparse": "npm:argparse@1.0.7"
      }
    },
    "npm:is-my-json-valid@2.13.1": {
      "map": {
        "generate-object-property": "npm:generate-object-property@1.2.0",
        "generate-function": "npm:generate-function@2.0.0",
        "jsonpointer": "npm:jsonpointer@2.0.0",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:espree@3.1.7": {
      "map": {
        "acorn": "npm:acorn@3.3.0",
        "acorn-jsx": "npm:acorn-jsx@3.0.1"
      }
    },
    "npm:figures@1.7.0": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5"
      }
    },
    "npm:levn@0.3.0": {
      "map": {
        "type-check": "npm:type-check@0.3.2",
        "prelude-ls": "npm:prelude-ls@1.1.2"
      }
    },
    "npm:acorn-jsx@3.0.1": {
      "map": {
        "acorn": "npm:acorn@3.3.0"
      }
    },
    "npm:type-check@0.3.2": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2"
      }
    },
    "npm:require-uncached@1.0.2": {
      "map": {
        "caller-path": "npm:caller-path@0.1.0",
        "resolve-from": "npm:resolve-from@1.0.1"
      }
    },
    "npm:inflight@1.0.5": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:is-resolvable@1.0.0": {
      "map": {
        "tryit": "npm:tryit@1.0.2"
      }
    },
    "npm:run-async@0.1.0": {
      "map": {
        "once": "npm:once@1.4.0"
      }
    },
    "npm:es6-weak-map@2.0.1": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.12",
        "es6-iterator": "npm:es6-iterator@2.0.0",
        "d": "npm:d@0.1.1",
        "es6-symbol": "npm:es6-symbol@3.1.0"
      }
    },
    "npm:es6-map@0.1.4": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.12",
        "es6-iterator": "npm:es6-iterator@2.0.0",
        "d": "npm:d@0.1.1",
        "es6-set": "npm:es6-set@0.1.4",
        "event-emitter": "npm:event-emitter@0.3.4",
        "es6-symbol": "npm:es6-symbol@3.1.0"
      }
    },
    "npm:es5-ext@0.10.12": {
      "map": {
        "es6-iterator": "npm:es6-iterator@2.0.0",
        "es6-symbol": "npm:es6-symbol@3.1.0"
      }
    },
    "npm:minimatch@3.0.3": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.6"
      }
    },
    "npm:flat-cache@1.2.1": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.6",
        "circular-json": "npm:circular-json@0.3.1",
        "write": "npm:write@0.2.1",
        "del": "npm:del@2.2.2"
      }
    },
    "npm:es6-iterator@2.0.0": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.12",
        "d": "npm:d@0.1.1",
        "es6-symbol": "npm:es6-symbol@3.1.0"
      }
    },
    "npm:argparse@1.0.7": {
      "map": {
        "sprintf-js": "npm:sprintf-js@1.0.3"
      }
    },
    "npm:generate-object-property@1.2.0": {
      "map": {
        "is-property": "npm:is-property@1.0.2"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:cli-cursor@1.0.2": {
      "map": {
        "restore-cursor": "npm:restore-cursor@1.0.1"
      }
    },
    "npm:write@0.2.1": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1"
      }
    },
    "npm:readline2@1.0.1": {
      "map": {
        "mute-stream": "npm:mute-stream@0.0.5",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
        "code-point-at": "npm:code-point-at@1.0.0"
      }
    },
    "npm:d@0.1.1": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.12"
      }
    },
    "npm:del@2.2.2": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "is-path-cwd": "npm:is-path-cwd@1.0.0",
        "pify": "npm:pify@2.3.0",
        "is-path-in-cwd": "npm:is-path-in-cwd@1.0.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "globby": "npm:globby@5.0.0",
        "rimraf": "npm:rimraf@2.5.4"
      }
    },
    "npm:event-emitter@0.3.4": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.12",
        "d": "npm:d@0.1.1"
      }
    },
    "npm:es6-set@0.1.4": {
      "map": {
        "d": "npm:d@0.1.1",
        "es5-ext": "npm:es5-ext@0.10.12",
        "es6-iterator": "npm:es6-iterator@2.0.0",
        "event-emitter": "npm:event-emitter@0.3.4",
        "es6-symbol": "npm:es6-symbol@3.1.0"
      }
    },
    "npm:es6-symbol@3.1.0": {
      "map": {
        "d": "npm:d@0.1.1",
        "es5-ext": "npm:es5-ext@0.10.12"
      }
    },
    "npm:caller-path@0.1.0": {
      "map": {
        "callsites": "npm:callsites@0.2.0"
      }
    },
    "npm:brace-expansion@1.1.6": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:restore-cursor@1.0.1": {
      "map": {
        "onetime": "npm:onetime@1.1.0",
        "exit-hook": "npm:exit-hook@1.1.1"
      }
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:code-point-at@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:globby@5.0.0": {
      "map": {
        "glob": "npm:glob@7.0.6",
        "object-assign": "npm:object-assign@4.1.0",
        "pify": "npm:pify@2.3.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "array-union": "npm:array-union@1.0.2",
        "arrify": "npm:arrify@1.0.1"
      }
    },
    "npm:rimraf@2.5.4": {
      "map": {
        "glob": "npm:glob@7.0.6"
      }
    },
    "npm:is-path-in-cwd@1.0.0": {
      "map": {
        "is-path-inside": "npm:is-path-inside@1.0.0"
      }
    },
    "npm:is-path-inside@1.0.0": {
      "map": {
        "path-is-inside": "npm:path-is-inside@1.0.1"
      }
    },
    "npm:pinkie-promise@2.0.1": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:array-union@1.0.2": {
      "map": {
        "array-uniq": "npm:array-uniq@1.0.3"
      }
    },
    "npm:eslint-plugin-react@6.2.0": {
      "map": {
        "doctrine": "npm:doctrine@1.3.0",
        "jsx-ast-utils": "npm:jsx-ast-utils@1.3.1"
      }
    },
    "npm:jsx-ast-utils@1.3.1": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0"
      }
    }
  }
});
