
### 配置文件修改

1. 将 [配置文件](https://raw.githubusercontent.com/Theo-messi/dotfiles/main/clash/clash.meta.config.yaml) 下载到本地 
2. `配置管理` - `上传配置文件(.yaml)`
3. 编辑配置文件 将这几行修改成自己的链接和订阅名称

**例:**
```yaml
########################################################################分隔符
# url 里填写自己的订阅 sub1 or sub2 修改成订阅名称
proxy-providers:
  sub1:     ###订阅名称###
    <<: *pp
    url: ""

  sub2:    ##订阅名称###
    <<: *pp
    url: ""
```
### open clash 设置
切换到 `Meta内核+Fake-ip`

网络栈类型 选择 `Mixed`

`流量控制 `- `绕过大陆ip`- 取消勾选

`GEO数据库/大陆白名单订阅` - 取消勾选

**保存并应用配置**

### GitHub Gist 托管并订阅

打开 [GitHub Gist](https://gist.github.com/)

`Gist description` 不用填，`Filename including extension...` 填入包括拓展名的文件全名，如 `config.yaml`，将配置文件的全部内容粘贴进去，最后点右下角绿色按钮发布。

然后打开刚刚发布的 Gist，点击右上角的 Raw，复制当前的的地址，如：

https://gist.githubusercontent.com/githubusername/1234567890/raw/0987654321/config.yaml

将 `/raw/` 之后的第二串随机数删除，得到形如：

https://gist.githubusercontent.com/githubusername/1234567890/raw/config.yaml

再在开头添加上 https://mirror.ghproxy.com/

随后在任意使用 Clash Meta 内核的 Clash 图形化客户端中添加这一订阅链接，等所需文件下载完成后就可以正常使用了。
