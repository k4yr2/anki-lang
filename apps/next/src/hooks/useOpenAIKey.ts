import { saveOpenAIKey } from '@/datas/slice/settings';
import { AppDispatch, RootState } from '@/datas/store/app';
import { FolgenVerifiable } from '@fuuwille/folgen-temp';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useOpenAIKey = () : FolgenVerifiable<string> => {
    const { openAI } = useSelector((state: RootState) => state.settings);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const value = openAI.key.content;
        if(!value || value === '') {
            (async () => {
                const key = await window.api.openAI.getKey();
                dispatch(saveOpenAIKey(key));
            })();
        }
    }, [openAI.key.content]);

    return openAI.key;
};

export default useOpenAIKey;
