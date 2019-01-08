-- 首页顶部的分类
CREATE TABLE banner (
    bid INT PRIMARY KEY AUTO_INCREMENT,
    bname VARCHAR(8),
    img VARCHAR(128),
    linkUrl VARCHAR(128)
)

INSERT INTO banner (bname, img, linkUrl) VALUES
('美食', 'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/', ''),
('晚餐', 'https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/', ''),
('商超便利', 'https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/', ''),
('水果', 'https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/', ''),
('医药健康', 'https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/', ''),
('鲜花绿植', 'https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/', ''),
('厨房生鲜', 'https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/', '');

-- 活动：折扣店
CREATE TABLE activity (
    aid INT PRIMARY KEY AUTO_INCREMENT,
    aname VARCHAR(8),
    intro VARCHAR(32),
    img VARCHAR(128)
);

INSERT INTO activity (aname, intro, img) VALUES
('品质套餐', '搭配齐全吃得好', 'https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png'),
('限量抢购', '超值美味9.9起', 'https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png');

-- 广告：轮播图
CREATE TABLE advertising (
    aid INT PRIMARY key AUTO_INCREMENT,
    aname VARCHAR(32),
    img VARCHAR(128),
    linkUrl VARCHAR(128)
)

INSERT INTO advertising (aname, img, linkUrl) VALUES
('', 'https://fuss10.elemecdn.com/7/90/8012dcb83434050f0363316f24809jpeg.jpeg', ''),
('', 'https://fuss10.elemecdn.com/d/f5/456ea6285819f7932d8606bffeb35jpeg.jpeg', ''),
('', 'https://fuss10.elemecdn.com/e/81/8d004d51356850e896645ba9e89b5jpeg.jpeg', ''),
('', 'https://fuss10.elemecdn.com/5/f7/a2271e4d2f1ccb925ad84dfd4edffjpeg.jpeg', '');

-- 商家列表
CREATE TABLE merchant (
    mid INT PRIMARY KEY AUTO_INCREMENT,
    mname VARCHAR(16) COMMENT '商家名称',
    logo VARCHAR(128) COMMENT 'logo',
    headImg VARCHAR(128) COMMENT '头部图片',
    isBrand BOOLEAN COMMENT '是否品牌店',
    score FLOAT(5, 1) COMMENT '评分',
    sales INT COMMENT '月销售额',
    startPrice TINYINT COMMENT '起送价',
    distributionPrice FLOAT(2, 1) COMMENT '配送费',
    distance CHAR(16) COMMENT '距离',
    needTime CHAR(8) COMMENT '大概需要多久送达',
    merchantType CHAR(16) COMMENT '商家店铺所属类型',
    meetAmount TINYINT COMMENT '满足多少金额可减',
    discounts TINYINT COMMENT '可减去多少钱'
)
ALTER TABLE merchant MODIFY COLUMN distributionPrice FLOAT(2, 1) # 修改表的字段类型

INSERT INTO merchant VALUES 
(NULL, '月光堡盒●炸鸡●汉堡●小吃', 'https://fuss10.elemecdn.com/c/44/8ad0ba99c703d633fab266cd3573bpng.png', 
'https://fuss10.elemecdn.com/c/44/8ad0ba99c703d633fab266cd3573bpng.png', false, 4.3, 2238, 20, 1.5, '2.7km', '42分钟', '汉堡', 30, 24),
(NULL, '真功夫(东华店)', 'https://fuss10.elemecdn.com/a/b3/259e1b77a1d4896f20f584087a9c4jpeg.jpeg', 
'https://fuss10.elemecdn.com/b/84/9e556f75f62903413dbba87bc68e9png.png', true, 4.6, 816, 20, 6.0, '1.2km', '35分钟', '简餐', 40, 20);


-- 评价表
CREATE TABLE evaluation (
    id TINYINT PRIMARY KEY AUTO_INCREMENT,
    merchantId VARCHAR(16),
    avatars VARCHAR(128) COMMENT '用户头像',
    userName CHAR(16) COMMENT '用户名',
    content VARCHAR(128) COMMENT '评价内容',
    img VARCHAR(128) COMMENT '评论图',
)

INSERT INTO evaluation VALUES
(NULL, 1, '', '', '好好吃，五星赞', 'https://fuss10.elemecdn.com/f/76/b49c375bc7b8b12d6702d4052fdc2jpeg.jpeg'),
(NULL, 1, 'https://fuss10.elemecdn.com/4/e9/87a9aa86d9f0bd940f7c8b6e28665jpeg.jpeg', '匿***妖', '挺好吃的，很香', 'https://fuss10.elemecdn.com/2/d2/bb6def0b36a78b1a0a149050f4eddjpeg.jpeg'),
(NULL, 1, 'https://fuss10.elemecdn.com/e/5b/994b83be2f32803bd4e155c8aa64ajpeg.jpeg', '天******A', '鸡肉卷的味道超好', 'https://fuss10.elemecdn.com/5/87/e4bcbb95f12aebc8f50d42406662bjpeg.jpeg');

-- 商品分类表
CREATE TABLE goodsType (
    iid TINYINT PRIMARY KEY AUTO_INCREMENT,
    merchantId INT,
    iname CHAR(8) COMMENT '类型的名字',
    icon VARCHAR(128) COMMENT '类型图标'
)
INSERT INTO goodsType VALUES
(NULL, 1, '热销', 'https://fuss10.elemecdn.com/a/ba/732b4ca103b2521c872442d7e5d4epng.png'),
(NULL, 1, '优惠', 'https://fuss10.elemecdn.com/b/91/8cf4f67e0e8223931cd595dc932fepng.png'),
(NULL, 1, '米饭套餐', ''),
(NULL, 1, '爆款折扣', ''),
(NULL, 1, '清新饮品', ''),
(NULL, 1, '特价小吃', ''),
(NULL, 1, '主食满减', '');

CREATE TABLE goodsList (
    iid TINYINT PRIMARY KEY AUTO_INCREMENT,
    goodsTypeId TINYINT,
    img VARCHAR(128),
    iname CHAR(16),
    sales INT,
    price FLOAT(5, 2)
)

INSERT INTO goodsList VALUES
(NULL, 1, 'https://fuss10.elemecdn.com/f/e2/e5705ee97fd16179cda3e22954090jpeg.jpeg', '招牌月光堡自选', 586, 39.80),
(NULL, 1, 'https://fuss10.elemecdn.com/c/61/4f83a808fb7823e3cdde180426ff9jpeg.jpeg', '爱你香酥炸鸡', 230, 19.90),
(NULL, 1, 'https://fuss10.elemecdn.com/f/57/7b39e6f76dcaecdbfd9debfe508f4jpeg.jpeg', '招牌卷组合自选', 208, 39.80),
(NULL, 1, 'https://fuss10.elemecdn.com/c/30/9fd652885e4958c40eda383e4549bjpeg.jpeg', '月光堡盒单人餐', 147, 50.00),
(NULL, 2, 'https://fuss10.elemecdn.com/9/02/8d30b77c57011ff486e2c66b3568ajpeg.jpeg', '雪碧', 7, 2.88),
(NULL, 2, 'https://fuss10.elemecdn.com/1/51/262c52bec518b579e99e0f7be8e03jpeg.jpeg', '芬达', 9, 2.88),
(NULL, 2, 'https://fuss10.elemecdn.com/1/c3/d31329bd8e58bb0d76e7441fde0f2jpeg.jpeg', '一万年嫩滑蛋挞', 49, 3.00);


-- 给表添加字段
ALTER TABLE goodsType ADD count TINYINT DEFAULT 0;
ALTER TABLE goodslIST ADD count TINYINT DEFAULT 0;