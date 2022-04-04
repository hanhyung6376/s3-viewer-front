const download = ({ file, fileName }: any) => {
    const blob = new Blob([file], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;

    document.body.appendChild(a);
    a.click();
    setTimeout((_) => {
        window.URL.revokeObjectURL(url);
    }, 60000);
    a.remove();
};

export default download;
