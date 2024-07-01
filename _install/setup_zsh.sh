#!/bin/bash

echo -e "\e[1;34m----------------------------------------------------------------------\e[0m"
echo -e "\e[1;34m「Debian/Ubuntu」 zsh 环境设置一键脚本\e[0m"
echo -e "脚本作者: Theo-Messi"
echo -e "GitHub 仓库: https://github.com/Theo-Messi/dotfiles"
echo -e "\e[1;34m----------------------------------------------------------------------\e[0m"

# ============================== 下载 zsh ==============================
echo -e "\n\e[1;34m正在下载 zsh...\e[0m"
sudo apt update
sudo apt install -y zsh
echo -e "\n\e[1;34mzsh 下载完成!\e[0m"

# ============================== 切换到 zsh ==============================
echo -e "\n\e[1;34m正在切换到 zsh...\e[0m"
chsh -s $(which zsh)
echo -e "\n\e[1;34m切换到 zsh 完成!\e[0m"

# ============================== 下载 git ==============================
echo -e "\n\e[1;34m正在下载 git...\e[0m"
sudo apt install -y git
echo -e "\n\e[1;34mgit 下载完成!\e[0m"

# ============================== 下载 oh-my-zsh ==============================
echo -e "\n\e[1;34m正在下载 oh-my-zsh...\e[0m"
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
echo -e "\n\e[1;34moh-my-zsh 下载完成!\e[0m"

# ============================== 安装插件 zsh-autosuggestions ==============================
echo -e "\n\e[1;34m正在安装 zsh-autosuggestions 插件...\e[0m"
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
echo -e "\n\e[1;34mzsh-autosuggestions 插件安装完成!\e[0m"

# ============================== 安装插件 zsh-syntax-highlighting ==============================
echo -e "\n\e[1;34m正在安装 zsh-syntax-highlighting 插件...\e[0m"
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
echo -e "\n\e[1;34mzsh-syntax-highlighting 插件安装完成!\e[0m"

# ============================== 复制 .zshrc 文件 ==============================
echo -e "\n\e[1;34m正在复制 .zshrc 文件到本地...\e[0m"
curl -fsSL https://raw.githubusercontent.com/Theo-Messi/dotfiles/main/zshrc/linux-debian.zshrc -o ~/.zshrc
echo -e "\n\e[1;34m.zshrc 文件复制完成!\e[0m"

# ============================== 完成提示 ==============================
echo -e "\n\e[1;32m设置完成！\e[0m"
echo -e "\e[1;33m请重新启动您的终端以开始使用 zsh。\e[0m"
