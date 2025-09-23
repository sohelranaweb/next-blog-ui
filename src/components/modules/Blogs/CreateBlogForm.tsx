"use client";
import { useState } from "react";

function CreateBlogForm() {
  const [isFeatured, setIsFeatured] = useState("false");
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4 w-full">
      <h1 className="text-xl font-semibold mb-4">Create Blog</h1>
      {/* Title  */}
      <div>
        <label className="block text-sm font-semibold mb-1" htmlFor="titlle">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>
      {/* Content  */}
      <div>
        <label className="block text-sm font-semibold mb-1" htmlFor="content">
          Content
        </label>
        <input
          type="text"
          id="content"
          name="content"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>
      {/* Thumbnail URL  */}
      <div>
        <label className="block text-sm font-semibold mb-1" htmlFor="Thumbnail">
          Thumbnail URL
        </label>
        <input
          type="text"
          id="thumbnail"
          name="thumbnail"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>
      {/* Tags  */}
      <div>
        <label className="block text-sm font-semibold mb-1" htmlFor="tags">
          Tags (comma separated)
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          placeholder="Next.js, React, Web dev"
          className="w-full rounded-md border px-3 py-2 focus:ring focus:ring-blue-200"
        />
      </div>
      {/* Featured  */}
      <div>
        <p className="block text-sm font-medium mb-1">Featured</p>
        <div className="flex gap-6">
          {/* Yes option */}
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="isFeatured"
              value="true"
              checked={isFeatured === "true"}
              onChange={(e) => setIsFeatured(e.target.value)}
            />
            Yes
          </label>

          {/* No option */}
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="isFeatured"
              value="false"
              checked={isFeatured === "false"}
              onChange={(e) => setIsFeatured(e.target.value)}
            />
            No
          </label>
        </div>
      </div>
    </div>
  );
}

export default CreateBlogForm;
