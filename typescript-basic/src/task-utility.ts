type Post = {
 id: number;          // id
 title: string;       // タイトル
 body: string;        // 本文
 published: boolean;  // 公開済みかどうか
};

type PostEdit = Partial<Post>; // 編集用の型
type ListView = Pick<Post, 'id' | 'title'>; // 一覧表示用の型
type Published = Readonly<Post>; // 公開済みの投稿用の型