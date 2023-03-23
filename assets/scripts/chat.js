
            function joinChatroom(code) {


                                

                                setInterval(() => {
                                    try {
                                        fetch(
                                            `assets/php/chat/get_chat.php?id=${localStorage.getItem(
                                                'chatRoom'
                                            )}`
                                        )
                                            .then((response) => response.text())
                                            .then((res3) => {
                                                let jsonRes;
                                                try {
                                                    jsonRes = JSON.parse(res3);
                                                } catch (error) {
                                                    if (error) {
                                                        return alert(res3);
                                                    }
                                                }

                                                if (jsonRes) {
                                                    //display chatroom id
                                                    messageList.children[0].children[1].textContent =
                                                        localStorage.getItem(
                                                            'chatRoom'
                                                        );
                                                    messageList.children[0].children[0].textContent =
                                                        'Room Code:';

                                                    //display messages
                                                    jsonRes.reverse();
                                                    for (msg in jsonRes) {
                                                        let curmsg =
                                                            jsonRes[msg];

                                                        if (
                                                            curmsg[1] ==
                                                            'Server'
                                                        ) {
                                                            let foundUser =
                                                                users.find(
                                                                    (user) =>
                                                                        curmsg[2].startsWith(
                                                                            user
                                                                        )
                                                                );

                                                            if (foundUser) {
                                                                curmsg[2] = `<span3 style="color: #${
                                                                    colors[
                                                                        users.indexOf(
                                                                            foundUser
                                                                        )
                                                                    ]
                                                                }">${HTMLUtils.escape(
                                                                    curmsg[2]
                                                                )}</span3>`;
                                                                messageList.children[
                                                                    parseInt(
                                                                        msg
                                                                    ) + 1
                                                                ].children[1].innerHTML =
                                                                    HTMLUtils.escape(
                                                                        curmsg[1] +
                                                                            ': '
                                                                    ) +
                                                                    curmsg[2];
                                                            } else {
                                                                users.push(
                                                                    curmsg[2].split(
                                                                        ' '
                                                                    )[0]
                                                                );
                                                                colors.push(
                                                                    randomColor()
                                                                );

                                                                curmsg[2] = `<span3 style="color: #${
                                                                    colors[
                                                                        colors.length -
                                                                            1
                                                                    ]
                                                                }">${HTMLUtils.escape(
                                                                    curmsg[2]
                                                                )}</span3>`;
                                                                messageList.children[
                                                                    parseInt(
                                                                        msg
                                                                    ) + 1
                                                                ].children[1].innerHTML =
                                                                    HTMLUtils.escape(
                                                                        curmsg[1] +
                                                                            ': '
                                                                    ) +
                                                                    curmsg[2];
                                                            }
                                                        } else if (
                                                            users.includes(
                                                                curmsg[1].trim()
                                                            )
                                                        ) {
                                                            curmsg[1] = `<span3 style="color: #${
                                                                colors[
                                                                    users.indexOf(
                                                                        curmsg[1].trim()
                                                                    )
                                                                ]
                                                            }">${HTMLUtils.escape(
                                                                curmsg[1]
                                                            )}</span3>`;
                                                            messageList.children[
                                                                parseInt(msg) +
                                                                    1
                                                            ].children[1].innerHTML =
                                                                curmsg[1] +
                                                                HTMLUtils.escape(
                                                                    ': ' +
                                                                        curmsg[2]
                                                                );
                                                        } else {
                                                            users.push(
                                                                curmsg[1].trim()
                                                            );
                                                            colors.push(
                                                                randomColor()
                                                            );

                                                            curmsg[1] = `<span3 style="color: #${
                                                                colors[
                                                                    colors.length -
                                                                        1
                                                                ]
                                                            }">${HTMLUtils.escape(
                                                                curmsg[1].trim()
                                                            )}</span3>`;
                                                            messageList.children[
                                                                parseInt(msg) +
                                                                    1
                                                            ].children[1].innerHTML =
                                                                curmsg[1] +
                                                                HTMLUtils.escape(
                                                                    ': ' +
                                                                        curmsg[2]
                                                                );
                                                        }

                                                        messageList.children[
                                                            parseInt(msg) + 1
                                                        ].children[0].textContent =
                                                            curmsg[0];
                                                    }
                                                }
                                            });
                                    } catch (err) {
                                        console.log(err);
                                    }
                                }, 5000);