<p>RT，已经完成了伪静态改造，主要修改的地方就是路由。</p>
<p>将原来的首页判断改为了以下内容：</p>
<pre><code class='language-javascript' lang='javascript'>if(urls.pathname == &quot;/&quot;)
</code></pre>
<p>将请求的 URL 字符串转为 URL 对象</p>
<pre><code class='language-javascript' lang='javascript'>var urls = new URL(request.url);
</code></pre>
<p>重新填充路径，不再从 GET 参数获取</p>
<pre><code class='language-javascript' lang='javascript'>var uname = unescape(&quot;posts&quot; + urls.pathname + &quot;.md&quot;);
</code></pre>
<p>从新的 URL 获取 Markdown 内容</p>
<pre><code class='language-javascript' lang='javascript'>var url = &quot;https://raw.githubusercontent.com/&quot; + github_base + &quot;/master/posts&quot; + urls.pathname + &quot;.md&quot;;
const init = {
    method: &quot;GET&quot;
};
const response = await fetch(url, init);
</code></pre>
<p>增加了翻页功能，每页显示 5 篇文章</p>
<pre><code class='language-javascript' lang='javascript'>if(current_page &gt; 1) {
    data += `&lt;a href=&quot;/?p=${before_page}&quot;&gt;&lt;button class=&quot;btn btn-default&quot;&gt;上一页&lt;/button&gt;&lt;/a&gt;&amp;nbsp; &amp;nbsp;`;
}
if(update_i &gt;= 5) {
    data += `&lt;a href=&quot;/?p=${next_page}&quot;&gt;&lt;button class=&quot;btn btn-default&quot;&gt;下一页&lt;/button&gt;&lt;/a&gt;`;
}
</code></pre>
<p>关于本博客模板可访问 <a href='https://github.com/starryshow/blog/blob/master/starry-blog.js' target='_blank' class='url'>https://github.com/starryshow/blog/blob/master/starry-blog.js</a> 查看。</p>
