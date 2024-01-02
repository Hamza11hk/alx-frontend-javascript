export default function taskBlock(trueOrFalse) {
  let task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = true;  // let to create a block-scoped variable
    const task2 = false;  // const to create a block-scoped constant
  }

  return [task, task2];
}
