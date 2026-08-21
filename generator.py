import os

def update_script_js():
    file_path = "script.js"
    
    if not os.path.exists(file_path):
        print("❌ Error: script.js file nahi mili!")
        return

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    print("🚀 SurajAN_95 Product Automation Pipeline Active...")
    
    # Naye products ki entry yahan automatic process hogi
    # Future scale ke liye pipeline ready hai.

if __name__ == "__main__":
    update_script_js()
