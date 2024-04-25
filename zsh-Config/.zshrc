# 环境变量设置
export PATH="/usr/local/sbin:$PATH"
export ZSH="$HOME/.oh-my-zsh"
FPATH=$(brew --prefix)/share/zsh-completions:$FPATH

# 主题设置
ZSH_THEME="awesomepanda"

# 大小写敏感
# CASE_SENSITIVE="true"

# 取消注释以下行以使用不区分连字符的完成。
# 区分大小写的完成必须关闭。 _ 和 - 可以互换。
# HYPHEN_INSENSITIVE="true"

# 取消注释以下行之一以更改自动更新行为
# zstyle ':omz:update' mode disabled  # 禁用自动更新
# zstyle ':omz:update' mode auto      # 自动更新，无需询问
# zstyle ':omz:update' mode reminder  # 只是提醒我到时候更新

# 取消注释以下行以更改自动更新的频率（以天为单位）。
# zstyle ':omz:update' frequency 13

export HOMEBREW_GITHUB_API_TOKEN=

# export HOMEBREW_NO_AUTO_UPDATE="true"
# 间隔 24 小时更新一次 (单位:秒)
export HOMEBREW_AUTO_UPDATE_SECS=86400

# 如果粘贴 URL 和其他文本出现混乱，请取消注释以下行。
DISABLE_MAGIC_FUNCTIONS="true"

# 取消注释以下行以禁用 ls 中的颜色。
# DISABLE_LS_COLORS="true"

# 取消注释以下行以禁用自动设置终端标题。
# DISABLE_AUTO_TITLE="true"

# 启用命令自动更正
ENABLE_CORRECTION="true"

# 在等待完成时显示红点.
COMPLETION_WAITING_DOTS="true"

# 如果您想禁用标记未跟踪的文件，请取消注释以下行
# 在 VCS 下为脏。这使得大型存储库的存储库状态检查
# 快得多、快得多。
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# 如果要更改命令执行时间，请取消注释以下行
# 历史命令输出中显示的标记。
# 您可以设置可选的三种格式之一：
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# 或者使用 strftime 函数格式规范设置自定义格式，
# 有关详细信息，请参阅“man strftime”。
# HIST_STAMPS="mm/dd/yyyy"

# 您想使用 $ZSH/custom 之外的其他自定义文件夹吗？
# ZSH_CUSTOM=/path/to/new-custom-folder


# 插件设置
plugins=(git autojump zsh-syntax-highlighting zsh-autosuggestions zsh-completions)

source $ZSH/oh-my-zsh.sh

# 用户配置
# export MANPATH="/usr/local/man:$MANPATH"

# 您可能需要手动设置您的语言环境
# export LANG=en_US.UTF-8 

# 本地和远程会话的首选编辑器
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# 编译标志
# export ARCHFLAGS="-arch x86_64"

# 设置个人别名，覆盖 oh-my-zsh 库提供的别名，
# 插件和主题。别名可以放在这里，不过 oh-my-zsh
# 鼓励用户在 ZSH_CUSTOM 文件夹中定义别名。
# 要获取活动别名的完整列表，请运行 `alias`。
#
# 别名设置
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
alias pn=pnpm

# ruby
export PATH="/usr/local/opt/ruby/bin:/usr/local/lib/ruby/gems/3.0.0/bin:$PATH"
export PATH="$HOME/.gem/ruby/3.0.0/bin:$PATH"
export PATH="/usr/local/opt/ruby/bin:$PATH"

# pnpm
export PNPM_HOME="$HOME/Library/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac

test -e "${HOME}/.iterm2_shell_integration.zsh" && source "${HOME}/.iterm2_shell_integration.zsh" 

# nvm
# export NVM_DIR="$HOME/.nvm"
# [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"
# [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"

export NVM_DIR="$HOME/.nvm"
nvm() { . "$NVM_DIR/nvm.sh" ; nvm $@ ; }
export PATH=$HOME/.nvm/versions/node/v21.1.0/bin/:$PATH

# GPG
export GPG_TTY=$(tty)

# autojump 
[[ -s $(brew --prefix)/etc/profile.d/autojump.sh ]] && . $(brew --prefix)/etc/profile.d/autojump.sh