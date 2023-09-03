import { render } from '@testing-library/react';
import { Gist } from './Gist';

const gist = {
  url: 'https://api.github.com/gists/d8c6a231c9c785fa8b2eefb18b1412fd',
  forks_url: 'https://api.github.com/gists/d8c6a231c9c785fa8b2eefb18b1412fd/forks',
  commits_url: 'https://api.github.com/gists/d8c6a231c9c785fa8b2eefb18b1412fd/commits',
  id: 'd8c6a231c9c785fa8b2eefb18b1412fd',
  node_id: 'G_kwDOAH-c9NoAIGQ4YzZhMjMxYzljNzg1ZmE4YjJlZWZiMThiMTQxMmZk',
  git_pull_url: 'https://gist.github.com/d8c6a231c9c785fa8b2eefb18b1412fd.git',
  git_push_url: 'https://gist.github.com/d8c6a231c9c785fa8b2eefb18b1412fd.git',
  html_url: 'https://gist.github.com/bryopsida/d8c6a231c9c785fa8b2eefb18b1412fd',
  files: {
    'install-falcon.yaml': {
      filename: 'install-falcon.yaml',
      type: 'text/x-yaml',
      language: 'YAML',
      raw_url:
        'https://gist.githubusercontent.com/bryopsida/d8c6a231c9c785fa8b2eefb18b1412fd/raw/9b487fe18f1d5b8056b8b1db3b606e52295658d4/install-falcon.yaml',
      size: 871,
    },
  },
  public: true,
  created_at: '2023-09-03T15:00:16Z',
  updated_at: '2023-09-03T15:00:16Z',
  description: 'Ansible playbook to install Falco on Debian systems',
  comments: 0,
  user: null,
  comments_url: 'https://api.github.com/gists/d8c6a231c9c785fa8b2eefb18b1412fd/comments',
  owner: {
    login: 'bryopsida',
    id: 8363252,
    node_id: 'MDQ6VXNlcjgzNjMyNTI=',
    avatar_url: 'https://avatars.githubusercontent.com/u/8363252?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/bryopsida',
    html_url: 'https://github.com/bryopsida',
    followers_url: 'https://api.github.com/users/bryopsida/followers',
    following_url: 'https://api.github.com/users/bryopsida/following{/other_user}',
    gists_url: 'https://api.github.com/users/bryopsida/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/bryopsida/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/bryopsida/subscriptions',
    organizations_url: 'https://api.github.com/users/bryopsida/orgs',
    repos_url: 'https://api.github.com/users/bryopsida/repos',
    events_url: 'https://api.github.com/users/bryopsida/events{/privacy}',
    received_events_url: 'https://api.github.com/users/bryopsida/received_events',
    type: 'User',
    site_admin: false,
  },
  truncated: false,
};

describe('Gist Component', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Gist {...gist} files={Object.values(gist.files)} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
