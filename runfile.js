import { run } from 'firenpm/runjs'

const task = {
  'clean': () => {
    run('rm -rf node_modules')
    run('rm -rf lib')
  },
  'build:clean': () => {
    run('rm -rf lib')
    run('mkdir lib')
  },
  'build': () => {
    task['build:clean']()
    run('babel src --out-dir lib --ignore test.js')
  },
  'lint': (path = '.') => {
    run(`eslint ${path}`)
  },
  'lint:fix': (path = '.') => {
    run(`eslint ${path} --fix`)
  },
  'test': () => {
    task['lint']()
    task['build']()
    run('mocha src/*.test.js --require firenpm/mochaccino/dom-setup --compilers js:firenpm/babel-register')
  },
  'publish': () => {
    task['test']()
    run('npm publish')
  },
  'web': () => {
    run('webpack-dev-server --config config/webpack.js --progress --open')
  }
}

export default task
