#!/bin/bash

echo -e "\e[1;34m----------------------------------------------------------------------\e[0m"
echo -e "\e[1;34m「Debian/Ubuntu」 系统优化一键脚本\e[0m"
echo -e "脚本作者: Theo-Messi"
echo -e "GitHub 仓库: https://github.com/Theo-Messi/dotfiles"
echo -e "\e[1;34m----------------------------------------------------------------------\e[0m"

# ============================== 更新系统 ==============================
echo -e "\n\e[1;34m正在更新系统...\e[0m"
sudo apt update && sudo apt upgrade -y
echo -e "\n\e[1;34m系统更新完成!\e[0m"

# ============================ 安装常用软件 ============================
echo -e "\n\e[1;34m正在安装常用软件...\e[0m"

# 安装常用软件: vim
echo -e "\n\e[1;34m正在安装 vim...\e[0m"
sudo apt install -y vim
echo -e "\n\e[1;34mvim 安装完成!\e[0m"

# 安装常用软件: htop
echo -e "\n\e[1;34m正在安装 htop...\e[0m"
sudo apt install -y htop
echo -e "\n\e[1;34mhtop 安装完成!\e[0m"

# 安装常用软件: sudo
echo -e "\n\e[1;34m正在安装 sudo...\e[0m"
sudo apt install -y sudo
echo -e "\n\e[1;34msudo 安装完成!\e[0m"

# 安装常用软件: curl
echo -e "\n\e[1;34m正在安装 curl...\e[0m"
sudo apt install -y curl
echo -e "\n\e[1;34mcurl 安装完成!\e[0m"

# 安装常用软件: Docker
echo -e "\n\e[1;34m正在安装 Docker...\e[0m"
sudo apt install -y docker.io
echo -e "\n\e[1;34mDocker 安装完成!\e[0m"

# 安装常用软件: lrzsz
echo -e "\n\e[1;34m正在安装 lrzsz...\e[0m"
sudo apt install -y lrzsz
echo -e "\n\e[1;34mlrzsz 安装完成!\e[0m"

# 安装常用软件: OpenSSH
echo -e "\n\e[1;34m正在安装 OpenSSH...\e[0m"
sudo apt install -y openssh-server
echo -e "\n\e[1;34mOpenSSH 安装完成!\e[0m"

# 安装常用软件: Git
echo -e "\n\e[1;34m正在安装 Git...\e[0m"
sudo apt install -y git
echo -e "\n\e[1;34mGit 安装完成!\e[0m"

# 安装完成提示
echo -e "\n\e[1;34m常用软件安装完成!\e[0m"

# ========================== 更改系统语言为中文 ==========================
echo -e "\n\e[1;34m正在更改系统语言为中文...\e[0m"

# 编辑 /etc/locale.gen 文件，取消注释 zh_CN.UTF-8 和 zh_CN 行
sudo sed -i '/zh_CN.UTF-8/s/^# //g' /etc/locale.gen
sudo sed -i '/zh_CN/s/^# //g' /etc/locale.gen

# 生成本地化设置
sudo locale-gen zh_CN.UTF-8

# 更新系统的默认语言设置为 zh_CN.UTF-8
sudo update-locale LANG=zh_CN.UTF-8

# 修复Debian系统下的中文乱码
echo -e "\n\e[1;34m正在修复 Debian 系统下的中文乱码...\e[0m"
sudo apt install -y ttf-wqy-microhei ttf-wqy-zenhei xfonts-intl-chinese
echo -e "\n\e[1;34m中文字体安装完成!\e[0m"
echo -e "\n\e[1;34m系统语言更改完成!\e[0m"

# ============================= 开启所有端口 =============================
echo -e "\n\e[1;34m正在开启所有端口...\e[0m"
sudo apt install -y iptables netfilter-persistent
sudo iptables -P INPUT ACCEPT
sudo iptables -P FORWARD ACCEPT
sudo iptables -P OUTPUT ACCEPT
sudo iptables -F
sudo netfilter-persistent save
echo -e "\n\e[1;34m所有端口开启完成!\e[0m"

# ========================== 删除系统自带软件 ===========================
echo -e "\n\e[1;34m正在删除系统自带软件...\e[0m"
sudo apt purge -y thunderbird totem rhythmbox empathy brasero simple-scan gnome-mahjongg aisleriot gnome-mines cheese transmission-common gnome-orca gnome-sudoku remmina
echo -e "\n\e[1;34m系统自带软件删除完成!\e[0m"

# ============================= 卸载桌面环境 =============================
echo -e "\n\e[1;34m正在卸载桌面环境...\e[0m"
sudo apt remove -y gnome-shell gnome
sudo apt autoremove -y
sudo apt purge -y gnome
sudo apt autoclean
sudo apt clean
echo -e "\n\e[1;34m桌面环境卸载完成!\e[0m"

# ========================= 自动卸载不需要的依赖 =========================
echo -e "\n\e[1;34m正在自动卸载不需要的依赖...\e[0m"
sudo apt autoremove -y
echo -e "\n\e[1;34m不需要的依赖卸载完成!\e[0m"

# ============================== 清理缓存 ==============================
echo -e "\n\e[1;34m正在清理缓存...\e[0m"
sudo apt-get autoclean
sudo apt-get clean
echo -e "\n\e[1;34m缓存清理完成!\e[0m"

# ============================== 提示重启系统 ==============================
echo -e "\n\e[1;32m所有操作完成！\e[0m"
echo -e "\e[1;33m请使用 reboot 重启您的系统以应用所有更改。\e[0m"
