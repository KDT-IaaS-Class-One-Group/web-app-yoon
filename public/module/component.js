/**
 * 에디터에 드디어 내장된 JSDoc 주석 작성 방식
 * 
 * @param {string} elementNode 
 * @param {object} attributes 
 * @param {array} children 
 * @returns string
 * 
 * @example
 * component(
 *  'div',
 *  { style : 'color:blue;' },
 *  [
 *    component('h1', {},['This is Page 1'])
 *  ]
 * )
 */


export function component(elementNode, attributes, children){
  // html element 문자열로 "조립 assemble"하는 패턴
  let elementStr = `<${elementNode}`;
  for (let key in attributes) {
    elementStr += `${key}="${attributes[key]}"`;
  }
  elementStr+='>';
  if (children) {
    children.forEach((child)=>{
      if(typeof child === "string"){
        elementStr += child;
      } else {
        elementStr+= component(child.elementNode, child.attributes, child.children);
      }
    })
  }

  elementStr += `</${elementNode}>`; // 맨 위의 변수에 덧붙혀서 반환
  return elementStr;
}

// 문자열로 잘 작동되는지 테스트
// let test =
//   component('div', {style : 'color:blue;'}, [
//     component('h1',{},['this is page1']),
//     component('h3',{},['this is h3'])
//   ]);
// console.log(test);