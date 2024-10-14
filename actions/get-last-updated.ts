export async function getLastUpdated() {
  const owner = 'ab-azmi';
  const repo = 'capek-kuliah';
  const branch = 'main';

  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/branches/${branch}`, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data from GitHub');
  }

  const data = await res.json();
  const lastUpdated = data.commit.commit.committer.date;

  return lastUpdated;
}
