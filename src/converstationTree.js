class ConversationTree {
  constructor() {
    this.root = new ConversationTreeNode();
    this.child = null;
  }
}

class ConversationTreeNode {
  constructor() {
    this.text = '';
    this.id = 0;
  }
}

// hard code first iteration
var node_0 = {
  text: 'are you a boy or a girl?',
  id: 0,
  child: []
};
var node_1 = { text: 'boy', id: 'node_1', child: [] };
var node_2 = { text: 'girl', id: 'node_2', child: [] };

var node_3 = { text: 'go find the sword', id: 'node_3', child: [] };
