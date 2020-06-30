<p>在 GTA5 里面，低底盘车有一个很好玩的功能，就是液压装置，可以通过按 X 键来控制车轮弹跳。</p>
<p>而对于普通车来说，是没有这个功能的，那么如果想要给普通载具也加上这个功能的话，则需要修改一些文件。</p>
<p>首先找到需要修改的载具的数据文件，这里需要修改 vehicle.meta 和 carcols.meta 文件。</p>
<p>首先我们来看 vehicle.meta 文件，在这里我们可以找到一个 flags 项，它的值由空格隔开，每个 flag 对应的都是载具的一种特性，这里我们需要为它加入液压装置系统的特性，假如原来的 flag 是这样的：</p>
<pre><code class='language-xml' lang='xml'>&lt;flags&gt;FLAG_SPORTS FLAG_AVERAGE_CAR FLAG_HAS_LIVERY&lt;/flags&gt;
</code></pre>
<p>那么我们修改一下，加入 <code>FLAG_HAS_LOWRIDER_HYDRAULICS</code> 这个选项。</p>
<pre><code class='language-xml' lang='xml'>&lt;flags&gt;FLAG_SPORTS FLAG_AVERAGE_CAR FLAG_HAS_LIVERY FLAG_HAS_LOWRIDER_HYDRAULICS&lt;/flags&gt;
</code></pre>
<p>接着来修改 carcols.meta 文件，在 <code>&lt;statMods&gt;</code> 和 <code>&lt;/statMods&gt;</code> 之间加上以下内容：</p>
<pre><code class='language-xml' lang='xml'>&lt;Item&gt;
    &lt;identifier /&gt;
    &lt;modifier value=&quot;25&quot; /&gt;
    &lt;audioApply value=&quot;1.000000&quot; /&gt;
    &lt;weight value=&quot;0&quot; /&gt;
    &lt;type&gt;VMT_WHEELS_REAR_OR_HYDRAULICS&lt;/type&gt;
&lt;/Item&gt;
&lt;Item&gt;
    &lt;identifier /&gt;
    &lt;modifier value=&quot;50&quot; /&gt;
    &lt;audioApply value=&quot;1.000000&quot; /&gt;
    &lt;weight value=&quot;0&quot; /&gt;
    &lt;type&gt;VMT_WHEELS_REAR_OR_HYDRAULICS&lt;/type&gt;
&lt;/Item&gt;
&lt;Item&gt;
    &lt;identifier /&gt;
    &lt;modifier value=&quot;75&quot; /&gt;
    &lt;audioApply value=&quot;1.000000&quot; /&gt;
    &lt;weight value=&quot;0&quot; /&gt;
    &lt;type&gt;VMT_WHEELS_REAR_OR_HYDRAULICS&lt;/type&gt;
&lt;/Item&gt;
&lt;Item&gt;
    &lt;identifier /&gt;
    &lt;modifier value=&quot;100&quot; /&gt;
    &lt;audioApply value=&quot;1.000000&quot; /&gt;
    &lt;weight value=&quot;0&quot; /&gt;
    &lt;type&gt;VMT_WHEELS_REAR_OR_HYDRAULICS&lt;/type&gt;
&lt;/Item&gt;
</code></pre>
<p>保存这两个文件，然后进入游戏即可按 X 使用低底盘液压装置。</p>
