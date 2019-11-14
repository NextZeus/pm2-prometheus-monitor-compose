module.exports = {
  deploy: {
    production: {
      'user': 'root',
      'host': '47.104.216.30',
      'ref': 'origin/master',
      'repo': 'git@github.com:NextZeus/prometheus-monitor.git',
      'path': '/data/work/prometheus-monitor',
      'pre-setup': "yum install git -y;",
      'post-setup': "ls -la",
      'pre-deploy-local': "pwd; echo 'this is a local command' ",
      'pre-deploy': 'pwd;ls -la;',
      'post-deploy': 'git pull origin master;git log -n 2;',
      'test': 'docker ps;'
    }
  }
};
