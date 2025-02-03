// this is special file format in next  js is error.tsx
// we can use this file to show error messages in the application

'use client';
export default function ErrorBoundary({ error  , reset}: { error: Error , reset: () => void }

) {
    return (
        <div>
            There is an error: {error.message}
            <button onClick={reset}>Try Agin</button>
        </div>
    );
}