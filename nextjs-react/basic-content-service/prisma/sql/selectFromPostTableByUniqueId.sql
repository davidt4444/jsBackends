select 
id,
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
    where uniqueId=?;
