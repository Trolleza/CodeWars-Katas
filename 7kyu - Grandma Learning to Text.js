// 7kyu - Grandma Learning to Text

// Write a function that replaces 'two', 'too' and 'to' with the number '2'. Even if the sound is found mid word (like in octopus) or not in lowercase grandma still thinks that should be replaced with a 2. Bless her.

// 'I love to text' becomes 'I love 2 text'
// 'see you tomorrow' becomes 'see you 2morrow'
// 'look at that octopus' becomes 'look at that oc2pus'
// Note that 'too' should become '2', not '2o'

// Sample Tests:
// Test.assertEquals(textin('I love to text'),'I love 2 text',)
// Test.assertEquals(textin('see you tomorrow'),'see you 2morrow',)
// Test.assertEquals(textin('look at that octopus'),'look at that oc2pus',)
// Test.assertEquals(textin('BECAUSE I WANT TO'),'BECAUSE I WANT 2',)

function textin(str){
  return str.replace(/(too|two|to)/gi, 2);
}

//OU 

function textin(s){
  const regex = /too|two|to/ig;
  return s.replace(regex, '2');
}

//OU

function textin(s){
  s=s.replace(/too/ig, "2");
  s=s.replace(/two/ig, "2");
  s=s.replace(/to/ig, "2");
  return s;
}