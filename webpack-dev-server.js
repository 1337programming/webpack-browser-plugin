var webpackDevServer = {
  _plugins: {
    record: [[Function]],
    'after-hash': [[Function]],
    'additional-chunk-assets': [[Function]],
    'optimize-module-order': [[Function]],
    'optimize-chunk-order': [[Function]]
  },
  compiler: {
    _plugins: {
      compilation: [Object],
      emit: [Object],
      done: [Object],
      'this-compilation': [Object],
      'after-resolvers': [Object],
      'entry-option': [Object],
      make: [Object],
      'context-module-factory': [Object],
      run: [Object],
      'after-compile': [Object],
      compile: [Object],
      invalid: [Object],
      'watch-run': [Object]
    },
    outputPath: '/',
    outputFileSystem: {data: {}},
    inputFileSystem: {
      fileSystem: {},
      _statStorage: [Object],
      _readdirStorage: [Object],
      _readFileStorage: [Object],
      _readlinkStorage: [Object]
    },
    recordsInputPath: undefined,
    recordsOutputPath: undefined,
    records: {},
    fileTimestamps: {},
    contextTimestamps: {},
    resolvers: {normal: [Object], loader: [Object], context: [Object]},
    parser: {_plugins: [Object], options: undefined},
    options: {
      devtool: '#inline-source-map',
      debug: true,
      context: '/Users/patrick.opie/Documents/TMobile/rebellion/app/scripts',
      devServer: [Object],
      stats: [Object],
      entry: [Object],
      output: [Object],
      resolve: [Object],
      module: [Object],
      headers: [Object],
      eslint: [Object],
      plugins: [Object],
      cache: true,
      target: 'web',
      node: [Object],
      resolveLoader: [Object],
      optimize: [Object]
    },
    context: '/Users/patrick.opie/Documents/TMobile/rebellion/app/scripts',
    name: undefined,
    _currentPluginApply: 3,
    watchFileSystem: {
      inputFileSystem: [Object],
      watcherOptions: [Object],
      watcher: [Object]
    }
  },
  resolvers: {
    normal: {
      _plugins: [Object],
      fileSystem: [Object],
      resolve: [Function]
    },
    loader: {
      _plugins: [Object],
      fileSystem: [Object],
      resolve: [Function]
    },
    context: {
      _plugins: [Object],
      fileSystem: [Object],
      resolve: [Function]
    }
  },
  inputFileSystem: {
    fileSystem: {},
    _statStorage: {
      duration: 60000,
      running: {},
      data: {},
      levels: [Object],
      count: 0,
      interval: null,
      needTickCheck: false,
      nextTick: null,
      passive: true
    },
    _readdirStorage: {
      duration: 60000,
      running: {},
      data: {},
      levels: [Object],
      count: 0,
      interval: null,
      needTickCheck: false,
      nextTick: null,
      passive: true
    },
    _readFileStorage: {
      duration: 60000,
      running: {},
      data: {},
      levels: [Object],
      count: 0,
      interval: null,
      needTickCheck: false,
      nextTick: null,
      passive: true
    },
    _readlinkStorage: {
      duration: 60000,
      running: {},
      data: {},
      levels: [Object],
      count: 0,
      interval: null,
      needTickCheck: false,
      nextTick: null,
      passive: true
    }
  },
  options: {
    devtool: '#inline-source-map',
    debug: true,
    context: '/Users/patrick.opie/Documents/TMobile/rebellion/app/scripts',
    devServer: {
      colors: true,
      historyApiFallback: true,
      port: 9000,
      contentBase: './app',
      host: 'localhost',
      publicPath: '/',
      outputPath: '/',
      filename: '[name].js',
      watchOptions: [Object],
      watchDelay: undefined,
      hot: false,
      stats: [Object]
    },
    stats: {colors: true},
    entry: {
      app: './app.js',
      head: './head.js',
      vendor: './vendor.js',
      oam: 'oam',
      oamHead: 'oamHead',
      hot: 'webpack/hot/dev-server'
    },
    output: {
      path: '/',
      filename: '[name].js',
      sourceMapFilename: '[name].map.js',
      chunkFilename: '[name].[id].js',
      hotUpdateMainFilename: 'updates/[hash].update.json',
      hotUpdateChunkFilename: 'updates/[hash].[id].update.js',
      libraryTarget: 'var',
      crossOriginLoading: false,
      hashFunction: 'md5',
      hashDigest: 'hex',
      hashDigestLength: 20,
      sourcePrefix: '\t',
      devtoolLineToLine: false
    },
    resolve: {
      alias: [Object],
      extensions: [Object],
      root: [Object],
      fastUnsafe: [],
      packageAlias: 'browser',
      modulesDirectories: [Object],
      packageMains: [Object]
    },
    module: {
      noParse: [Object],
      preLoaders: [Object],
      loaders: [Object],
      unknownContextRequest: '.',
      unknownContextRecursive: true,
      unknownContextRegExp: /^\.\/.*$/,
      unknownContextCritical: true,
      exprContextRequest: '.',
      exprContextRegExp: /^\.\/.*$/,
      exprContextRecursive: true,
      exprContextCritical: true,
      wrappedContextRegExp: /.*/,
      wrappedContextRecursive: true,
      wrappedContextCritical: false
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    },
    eslint: {
      configFile: '/Users/patrick.opie/Documents/TMobile/rebellion/eslint/eslint.json',
      ignorePath: '/Users/patrick.opie/Documents/TMobile/rebellion/eslint/.eslintignore',
      rulePaths: [Object],
      reset: true,
      ignore: true
    },
    plugins: [[Object], {}, [Object], [Object], [Object], [Object], [Object]],
    cache: true,
    target: 'web',
    node: {
      console: false,
      process: true,
      global: true,
      setImmediate: true,
      __filename: 'mock',
      __dirname: 'mock'
    },
    resolveLoader: {
      fastUnsafe: [],
      alias: {},
      modulesDirectories: [Object],
      packageMains: [Object],
      extensions: [Object],
      moduleTemplates: [Object]
    },
    optimize: {occurenceOrderPreferEntry: true}
  },
  outputOptions: {
    path: '/',
    filename: '[name].js',
    sourceMapFilename: '[name].map.js',
    chunkFilename: '[name].[id].js',
    hotUpdateMainFilename: 'updates/[hash].update.json',
    hotUpdateChunkFilename: 'updates/[hash].[id].update.js',
    libraryTarget: 'var',
    crossOriginLoading: false,
    hashFunction: 'md5',
    hashDigest: 'hex',
    hashDigestLength: 20,
    sourcePrefix: '\t',
    devtoolLineToLine: false
  },
  bail: undefined,
  profile: undefined,
  mainTemplate: {
    _plugins: {
      startup: [Object],
      render: [Object],
      'local-vars': [Object],
      require: [Object],
      'module-obj': [Object],
      'require-extensions': [Object],
      'jsonp-script': [Object],
      'require-ensure': [Object],
      bootstrap: [Object],
      'hot-bootstrap': [Object],
      hash: [Object],
      'module-require': [Object],
      'global-hash': [Object],
      'current-hash': [Object]
    },
    outputOptions: {
      path: '/',
      filename: '[name].js',
      sourceMapFilename: '[name].map.js',
      chunkFilename: '[name].[id].js',
      hotUpdateMainFilename: 'updates/[hash].update.json',
      hotUpdateChunkFilename: 'updates/[hash].[id].update.js',
      libraryTarget: 'var',
      crossOriginLoading: false,
      hashFunction: 'md5',
      hashDigest: 'hex',
      hashDigestLength: 20,
      sourcePrefix: '\t',
      devtoolLineToLine: false
    }
  },
  chunkTemplate: {
    _plugins: {render: [Object], hash: [Object]},
    outputOptions: {
      path: '/',
      filename: '[name].js',
      sourceMapFilename: '[name].map.js',
      chunkFilename: '[name].[id].js',
      hotUpdateMainFilename: 'updates/[hash].update.json',
      hotUpdateChunkFilename: 'updates/[hash].[id].update.js',
      libraryTarget: 'var',
      crossOriginLoading: false,
      hashFunction: 'md5',
      hashDigest: 'hex',
      hashDigestLength: 20,
      sourcePrefix: '\t',
      devtoolLineToLine: false
    }
  },
  hotUpdateChunkTemplate: {
    _plugins: {render: [Object], hash: [Object]},
    outputOptions: {
      path: '/',
      filename: '[name].js',
      sourceMapFilename: '[name].map.js',
      chunkFilename: '[name].[id].js',
      hotUpdateMainFilename: 'updates/[hash].update.json',
      hotUpdateChunkFilename: 'updates/[hash].[id].update.js',
      libraryTarget: 'var',
      crossOriginLoading: false,
      hashFunction: 'md5',
      hashDigest: 'hex',
      hashDigestLength: 20,
      sourcePrefix: '\t',
      devtoolLineToLine: false
    }
  },
  moduleTemplate: {
    _plugins: {},
    outputOptions: {
      path: '/',
      filename: '[name].js',
      sourceMapFilename: '[name].map.js',
      chunkFilename: '[name].[id].js',
      hotUpdateMainFilename: 'updates/[hash].update.json',
      hotUpdateChunkFilename: 'updates/[hash].[id].update.js',
      libraryTarget: 'var',
      crossOriginLoading: false,
      hashFunction: 'md5',
      hashDigest: 'hex',
      hashDigestLength: 20,
      sourcePrefix: '\t',
      devtoolLineToLine: false
    }
  },
  entries: [],
  preparedChunks: [],
  chunks: [],
  namedChunks: {},
  modules: [],
  _modules: {},
  cache: null,
  records: {},
  nextFreeModuleId: 1,
  nextFreeChunkId: 0,
  nextFreeModuleIndex: 0,
  nextFreeModuleIndex2: 0,
  additionalChunkAssets: [],
  assets: {},
  errors: [],
  warnings: [],
  children: [],
  dependencyFactories: {
    keys: [[Object], [Object], [Object]],
    values: [{}, [Object], [Object]]
  },
  dependencyTemplates: {
    keys: [[Object], [Object], [Object]],
    values: [{}, {}, {}]
  },
  fileTimestamps: {},
  contextTimestamps: {},
  name: undefined
}