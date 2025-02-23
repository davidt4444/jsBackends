select id,
uniqueId,
title,
content,
createdAt,
author,
category,
updatedAt,
likesCount,
authorId,
isPublished,
views
from JPost
order by id desc limit ?;
