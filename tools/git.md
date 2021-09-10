# Git

## 一、参考  <small>(*都是阮老师的教程*)</small>

1. [Git 使用规范流程](http://www.ruanyifeng.com/blog/2015/08/git-use-process.html)
2. [Git 分支管理策略](http://www.ruanyifeng.com/blog/2012/07/git.html)
3. [Git 远程操作详解](http://www.ruanyifeng.com/blog/2014/06/git_remote.html)
4. [Git 工作流程](http://www.ruanyifeng.com/blog/2015/12/git-workflow.html)
5. [版本控制入门插图教程](http://www.ruanyifeng.com/blog/2008/12/a_visual_guide_to_version_control.html)
6. [常用 Git 命令清单](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)

## 二、常用命令

2.1 查看 / 提交

```BASH
$ git branch  (-a)             查看分支(所有)
$ git checkout [branch]        切换分支
$ git status                   查看文件状态
$ git add . (a.js)             本次提交包含的文件
$ git commit -m "message"      本地提交
```

2.2 创建／删除分支

```BASH
$ git branch [branch]                       创建分支，但依然停留在当前分支
$ git checkout -b [branch]                  创建分支，并切换到新创建的分支
$ git checkout -b [branch] [remote/branch]  创建远程分支到本地
```

如果已存在远程分支，需要先拉取，然后再创建

```BASH
$ git fetch origin [branch]
$ git checkout -b [branch] [remote/branch]
```

```BASH
$ git branch -d [branch]                    删除本地分支
$ git push origin :[branch]                 删除远程分支（写法一）
$ git push origin --delete [branch]         删除远程分支（写法二）
```

2.3 远程仓库操作

```BASH
$ git push  <远程主机名>  <本地分支名>:<远程分支名>
e.g. $ git push origin [branch]       远程分支如果具有与本地分支存在“追踪关系”时，可以省略
$ git pull [remote] [branch]           取回远程仓库变化，并与本地分支合并
```

2.4 合并

```BASH
$ git merge [branch]   合并指定分支到当前分支
```

2.5 标签

```BASH
$ git tag [tag]                       新建tag
$ git push [remote] [tag]             提交远程指定tag
$ git tag -d [tag]                    删除本地指定tag
$ git push origin :refs/tags/[tag]    删除远程指定tag
```

2.6 查看日志

```BASH
$ git log -p        含有内容差异
$ git log -2        最近数条
$ git log --stat    列出总结性选项
$ git log --pretty=oneline || short || full || fuller 格式化查看内容
$ git log --pragh   展现分支线

$ git log filename  查看单文件提交历史
$ git log -p filename 查看单文件提交历史和差异详细信息
```

2.7 重写历史

```BASH
// 修改多个提交信息，一般是用于合并提交信息，比如从一个 feature 开发分支合并到主要开发分支，多个提交信息会显得杂乱
// (最近3条) i 表示 interaction, 即交互操作，该命令会打开一个编辑器，可以进行修改
$ git rebase -i HEAD~3  

// 在编辑器修改后退出保存
$ wq
```

2.8 重命名分支

```BASH
$ git branch -m new-name              重命名当前分支
$ git branch -m old-name new-name     重命名其他分支
$ git push origin :old-name new-name  替代远程分支
$ git push origin -u new-name         重新关联远程分支
```

[参考](https://multiplestates.wordpress.com/2015/02/05/rename-a-local-and-remote-branch-in-git/)

2.9 回滚单文件

```
$ git checkout filename     如果文件未提交
$ git checkout [commit_hash] filename  如果文件已提交 [commit_hash] 是所要回滚版本的 hash 编号
或者
$ git reset [commit_hash] filename
```

[参考](https://fettblog.eu/snippets/git/reverting-a-single-file/)

## 三、团队协作

下面是一般流程，实际开发中可以灵活使用：

1. 本地提交

```
$ git add .
$ git commit -m "message"
```

2. 获取分支最新版本

```
$ git fetch [origin develop]
```

3. 合并分支

```
$ git merge [origin/develop]
```

4. 运程提交

```
$ git push [origin develop]
```

注意：

- 如果你只想获取最新代码，并且本地的修改与获取文件并不冲突，可以直接 merge，所以并不一定完全按照上面的顺序执行
- 如果有冲突 首先 `git stash` 保存自己本地修改的代码 然后 merge 远程代码， 接着 `git stash pop` 还原自己修改的代码 然后修改解决冲突 最后提交
- 出现冲突的解决方法：
  - 通过命令行合并，可能在代码中标记出冲突所在的区域，需要手动改写
  - WebStorm 可以通过菜单选项 Git -> Repository -> Merge Changes，手动解决冲突
  - VS Code 内置工具进行手动合并

## 四、问题

1. Windows 提交文件时，提示“LF will be replaced by CRLF”
   [去掉提示的方法](https://blog.csdn.net/taiyangdao/article/details/78629107)

```
查看
$ git config --get core.autocrlf

设置
$ git config core.autocrlf false
```

2. Windows git log 乱码，尚未解决

## 五、迁移

1. 改变远程仓库的连接 [Changing a remote's URL](https://help.github.com/articles/changing-a-remote-s-url/)

```
List your existing remotes in order to get the name of the remote you want to change
$ git remote -v

Change your remote's URL from SSH to HTTPS with the git remote set-url command.
$ git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
```

2. 项目迁移  
   从 GitHub 迁移至 GitLab  
   new project -> import project -> select GitHub -> select repository

## 六、GitHub

1. [GitHub Protips: Tips, tricks, hacks, and secrets from Lee Reilly](https://github.blog/2020-04-09-github-protips-tips-tricks-hacks-and-secrets-from-lee-reilly/)

2. GitHub 主干分支由 master 变更为 main，已存在项目进行 git 管理 初始化可以写成 `git init --initial-branch=main`

3. 报错 `LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443`

安装 libressl `$ brew install libressl`

> 不能完全解决问题 还需要用到第 4 点

4. 报错 `Password authentication is temporarily disabled as part of a brownout. Please use a personal access token instead`

（1）Github 设置 token [Creating a personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
（2）Mac keychain 更改密码为生成的 token
