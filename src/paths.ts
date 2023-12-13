const paths = {
  home(): string {
    return '/';
  },
  topicShow(topicSlug: string): string {
    return `/topics/${topicSlug}`;
  },
  postCreate(postSlug: string): string {
    return `/topics/${postSlug}/posts/new`;
  },
  postShow(postSlug: string, postId: number): string {
    return `/topics/${postSlug}/posts/${postId}`;
  },
};

export default paths;
