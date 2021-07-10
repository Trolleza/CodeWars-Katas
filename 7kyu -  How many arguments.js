// 7kyu -  How many arguments

// args_count(1, 2, 3) -> 3
// args_count(1, 2, 3, 10) -> 4

function args_count(...args) {
  let num = 0;
  for (let i = 0; i < args.length; i++) {
    num++;
  }
  return num;
}

//OU

let args_count = (...args) => args.length;

//OU

let args_count = (...args) => [...args].length;

//OU

function args_count() {
  return arguments.length;
}

//OU

function args_count(...args) {
  return args.length;
}

//OU
