/*
 *   Copyright (c) 2021 Busy Human LLC
 *   All rights reserved.
 *   This file, its contents, concepts, methods, behavior, and operation  (collectively the \"Software\") are protected by trade secret, patent,  and copyright laws. The use of the Software is governed by a license  agreement. Disclosure of the Software to third parties, in any form,  in whole or in part, is expressly prohibited except as authorized by  the license agreement.
 */
//render chat templates to the DOM
//clear the list of chats (when the room changes)

class ChatUI {
    constructor(list){
        this.list = list;
    }
    render(data){
        const html = `
            <li class="list-group-item>
                <span class="username">${data.username}</span>
                <span class="message">${data.message}</span>
                <div class="time">${data.created_at.toDate()}</div>
            </li>
        `;

        this.list.innerHTML += html
    }
}