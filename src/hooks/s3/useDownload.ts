const useDownload = ({ file, fileName }: any) => {
    const url = window.URL.createObjectURL(file);
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

export default useDownload;
