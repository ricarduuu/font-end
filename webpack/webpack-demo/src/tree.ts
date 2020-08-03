
interface nodeIn{
  key: number,
  left: object,
  right: object
}
function tree() {
  let root: object = null;
  let Node = function (key: string) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  function insertNode(root: object, node: nodeIn){
    
  }
    // 根结点
    this.insert = function (key) {
      let node = new Node(key);
      root === null ? (root = node) : (insertNode(root, node));
    }
}