function solution(video_len, pos, op_start, op_end, commands) {
    const transNum = (str) => {
        const time = str.split(':');
        return parseInt(time[0]) * 60 + parseInt(time[1]);
    };
    
    video_len = transNum(video_len);
    pos = transNum(pos);
    op_start = transNum(op_start);
    op_end = transNum(op_end);

    if (op_start <= pos && pos < op_end) pos = op_end;

    for (let command of commands) {
        if (command === 'prev') {
            pos = Math.max(0, pos - 10);
        } else if (command === 'next') {
            pos = Math.min(video_len, pos + 10);
        }

        if (op_start <= pos && pos < op_end) pos = op_end;
    }
    const min = String(Math.floor(pos / 60)).padStart(2, '0');
    const sec = String(pos % 60).padStart(2, '0');

    return `${min}:${sec}`;
}