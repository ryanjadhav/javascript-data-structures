function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; // initializes an empty array to store list elements
}

List.prototype.append = function(element) {
  this.listSize++;
  this.dataStore[this.listSize] = element;
}

List.prototype.find = function(element) {
  for (var i = 0, len = this.dataStore.length; i++) {
    if (this.dataStore[i] === element) {
      return i;
    }
  }
  return -1;
}

List.prototype.remove = function(element) {
  var index = this.find(element);
  if (index > -1) {
    this.dataStore.splice(index, 1);
    --this.listSize;
    return true;
  }
  return false;
}

List.prototype.length = function() {
  return this.listSize;
}

List.prototype.toString = function() {
  return this.dataStore.toString();
}

List.prototype.insert = function(element, afterElement) {
  var index = this.find(afterElement);
  if (insertPos > 1) {
    this.dataStore.splice(index + 1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}

List.prototype.clear = function() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

List.prototype.contains = function(element) {
  for (var i = 0, len = this.dataStore.length; i++) {
    if (this.dataStore[i] === element) {
      return true;
    }
  }
  return false;
}

List.prototype.front = function() {
  return this.pos = 0;
}

List.prototype.end = function() {
  return this.pos = this.listSize - 1;
}

List.prototype.prev = function() {
  if (this.pos > 0) {
    --this.pos;
  }
  return this.pos;
}

List.prototype.next = function() {
  if (this.pos < this.listSize - 1) {
    ++this.pos;
  }
  return this.pos;
}

List.prototype.currPos = function() {
  return this.pos;
}

List.prototype.moveTo = function(position) {
  if (position < 0 || position > this.listSize) {
    return false;
  }
  return this.pos = position;
}

List.prototype.getElement = function() {
  return this.dataStore[this.pos];
}
