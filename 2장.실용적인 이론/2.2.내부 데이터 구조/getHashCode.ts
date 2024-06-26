function GetHashCode1() {
  return 4;
}

class GetHashCode2 {
  constructor(public topicId: number, public postId: number) {
    this.topicId = topicId;
    this.postId = postId;
  }

  public getHashCode(): number {
    return (
      ((this.topicId & 0xffff) << 16) ^
      ((this.topicId & 0xffff0000) >>> 16) ^
      this.postId
    );
  }
}

class HashcodeCombine {
  constructor(public topicId: number, public postId: number) {
    this.topicId = topicId;
    this.postId = postId;
  }

  public getHashCode(): number {
    // 간단한 해시 결합 방법
    let hash = 17;
    hash = hash * 31 + this.topicId;
    hash = hash * 31 + this.postId;
    return hash;
  }
}
